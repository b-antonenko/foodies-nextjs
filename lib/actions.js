 'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalidValue = (text) => {
    return !text || text.trim() === '';
};

export const handleFormSubmit = async (prevState, formData) => {

    const data = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        creator: formData.get('name'),
        image: formData.get('image'),
        creator_email: formData.get('email'),
    };

    if (isInvalidValue(data.title) ||
        isInvalidValue(data.summary) ||
        isInvalidValue(data.instructions) ||
        isInvalidValue(data.creator) ||
        isInvalidValue(data.creator_email)    
    ) {
        return {
            message: 'Invalid input'
        };
    }

    await saveMeal(data);
    revalidatePath('/meals', 'layout');

    redirect('/meals');
  }  
