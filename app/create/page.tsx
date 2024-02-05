'use client'

import React, {useState} from "react";
import ASCIIPage from "@/components/ui/ascii/ASCIIPage";
import QRPage from "@/components/ui/qr/QRPage";

enum Page {
    ASCII = 'ascii',
    QR = 'qr'
}

export default function Home() {

    const [page, setPage] = useState<string | null>(Page.ASCII);


    return (
        <>

            <div className="max-w-screen-sm mx-auto pt-5">


                <header className="px-2 h-14">
                    <nav className="">
                        <div className="flex hover:cursor-pointer select-none">
                            <div className={`mx-auto ${page == Page.ASCII && "active"} header-link text-center w-full`}
                                 onClick={event => setPage(Page.ASCII)}>
                                ASCII converter
                            </div>
                            <div className={`mx-auto ${page == Page.QR && "active"} header-link text-center w-full`} onClick={event => setPage(Page.QR)}>
                                QR generator
                            </div>
                        </div>
                    </nav>
                </header>
            </div>

            {page == Page.ASCII && <ASCIIPage/>}
            {page == Page.QR && <QRPage/>}




        </>
    )
}