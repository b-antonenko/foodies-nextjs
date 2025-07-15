'use client'

import { useRef, useState } from 'react';
import clasess from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({label, name}) {

    const inputRef = useRef();

    const [pickedImage, setPickedImage] = useState();

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if(!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        };

        fileReader.readAsDataURL(file);
    };

    const handlePick = () => {
        inputRef.current.click();
    };

    return <div className={clasess.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={clasess.controls}>
            <div className={clasess.preview}>
                {!pickedImage && <p>No image picked yet</p>}
                {pickedImage && <Image src={pickedImage} alt="The image picked by user" fill />}
            </div>
            <input
                className={clasess.input} 
                type='file' 
                hidden
                id={name} 
                accept='image/png, image/jpeg' 
                name={name}
                ref={inputRef}
                onChange={handleImageChange}
            />
            <button className={clasess.button} onClick={handlePick} type="button">
                Pick an image
            </button>
        </div>
    </div>
};
