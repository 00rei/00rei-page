'use client'

import {useState, ChangeEvent, FormEvent, useRef} from 'react';

interface Props {
    setImage: any;
    setFile: any;
    file: any;
    setIsLoading: any;
}

export default function ASCIIUploadForm({setImage, setFile, file, setIsLoading}: Props) {
    const [font, setFont] = useState(12);
    const filePicker = useRef(null);


    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name == 'file') {
            const selectedFile = e.target.files?.[0];
            setFile(selectedFile || null);
        }

        if (e.target.name == 'font') {
            const size = e.target.value;
            setFont(parseInt(size))
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();


        if (!file) {
            console.error('No file selected.');
            return;
        }
        // setImage(null);
        setIsLoading(true);

        if (font < 10) {
            setFont(10)
        } else if (font > 72) {
            setFont(72)
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('font_size', font.toString());


        try {
            const response = await fetch('https://api.00rei.tech/ascii/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const blob = await response.blob();
                const imageUrl = URL.createObjectURL(blob);
                setImage(imageUrl);
            } else {
                console.error('File upload failed.');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
        setIsLoading(false);

    };

    const handlePick = () => {
        // @ts-ignore
        filePicker.current?.click();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} method="POST" className="  ">
                <div>
                    <div className="border-b   border-gray-900/10 pb-8">

                        <div className="mx-auto my-6 flex ">

                            <div className="w-full  justify-center">
                                <label htmlFor="font" className="block text-sm font-medium leading-6 text-gray-900">
                                    Размер символов, px (10-72)
                                </label>

                                <input
                                    type="number"
                                    min="10"
                                    name="font"
                                    id="font"
                                    autoComplete="font"
                                    onChange={handleFileChange}
                                    defaultValue="24"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />

                            </div>
                        </div>

                        <div className="w-full mx-auto">

                            <div className="mt-2">
                                <div onClick={handlePick}
                                     className="rounded-md bg-gray-600 text-center select-none hover:cursor-pointer px-3 w-full py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500">Выбрать
                                    изображение (до 10 MB)
                                </div>
                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    autoComplete="file"
                                    className="py-1.5 text-gray-900 hidden"
                                    ref={filePicker}
                                    onChange={handleFileChange}
                                    accept="image/png, image/jpg, image/jpeg, image/bmp"
                                />

                            </div>
                        </div>

                        <div className="mt-6 flex flex-col w-full items-center">
                            {file && file.name}
                            <button
                                type="submit" id="submit" name="submit"
                                className="rounded-md bg-gray-600 w-full px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500"
                            >
                                Загрузить
                            </button>
                        </div>
                    </div>
                </div>
            </form>

            {/*<form onSubmit={handleSubmit} method="POST">*/}
            {/*    <input type="file" onChange={handleFileChange} accept="image/png, image/jpg, image/jpeg, image/bmp"/>*/}
            {/*    <input type="number" min="10"/>*/}
            {/*    <button type="submit">Upload</button>*/}
            {/*</form>*/}
        </div>
    );
};

