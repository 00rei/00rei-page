'use client'

import {useState} from "react";
import Loading from "@/components/ui/loading/Loading";
import QRUploadForm from "@/components/ui/qr/QRUploadForm";


export default function QRPage() {
    const [image, setImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean | null>(null)

    return (
        <div className="max-w-screen-sm mx-auto pt-5">

            <div className="mx-auto my-4 lg:my-12 p-2 selection:bg-black selection:text-gray-200">
                <div className="w-full text-center mx-auto">

                    <section className=" flex flex-col justify-between mb-5">
                        <h3 className="mb-2  font-bold text-2xl">QR генератор</h3>
                        <p className=" text-gray-500">Сгенерируйте QR код из введенной строки</p>
                    </section>

                </div>

                <hr/>

                <QRUploadForm setImage={setImage} setIsLoading={setIsLoading}/>


            </div>

            <div className=" justify-center flex">
                {isLoading && <Loading/>}
                {!isLoading && image && <img src={image}
                               className="sm:max-w-screen-sm md:max-w-screen-md xl:max-w-screen-xl 2xl:max-w-screen-2xl"
                               alt="Uploaded Image"/>}

            </div>


        </div>
    )
}