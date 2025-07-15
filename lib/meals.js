import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

const db = sql('meals.db');

export const getMeals = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // throw new Error('Loading meals failed');
    return db.prepare('SELECT * FROM meals').all();
};

export const getMeal = (slug) => {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
};

export const saveMeal = async (data) => {
    data.slug = slugify(data.title, {lower: true});
    data.instructions = xss(data.instructions);

    const extension = data.image.name.split('.').pop();
    const fileName = `${data.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await data.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (e) => {
        if(e) {
            throw new Error('Saving image failed');
        }
    });

    data.image = `/images/${fileName}`;

    db.prepare(`
        INSERT INTO meals
    (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
        @title, 
        @summary, 
        @instructions, 
        @creator, 
        @creator_email, 
        @image, 
        @slug
    )            
    `).run(data);
};