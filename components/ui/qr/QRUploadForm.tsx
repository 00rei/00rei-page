'use client'

import {useState, FormEvent} from 'react';

interface Props {
    setImage: any;
    setIsLoading: any;
}

export default function QRUploadForm({setImage, setIsLoading}: Props) {
    const [url, setUrl] = useState('');


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setIsLoading(true);

        try {
            const response = await fetch('https://api.00rei.tech/qr/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({url}),
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

    return (
        <div>
            <form onSubmit={handleSubmit} method="POST" className="  ">
                <div>
                    <div className="border-b   border-gray-900/10 pb-8">

                        <div className="mx-auto my-6 flex ">

                            <div className="w-full  justify-center">
                                <label htmlFor="qr" className="block text-sm font-medium leading-6 text-gray-900">
                                    Введите текст для кодирования
                                </label>

                                <input
                                    type='text'
                                    name="qr"
                                    id="qr"
                                    onChange={(e) => setUrl(e.target.value)}
                                    placeholder="https://google.com"
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />

                            </div>
                        </div>


                        <div className="mt-6 flex flex-col w-full items-center">
                            <button
                                type="submit" id="submit" name="submit"
                                className="rounded-md bg-gray-600 w-full px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500"
                            >
                                Сгенерировать QR-код
                            </button>
                        </div>
                    </div>
                </div>
            </form>


        </div>
    );
};

