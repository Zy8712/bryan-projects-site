import certificatesData from "../../certificates_data.json";

export default function RenderCertificates() {
    return (
        <>
            {certificatesData.map((image, index) => (
                <div className="w-[360px] h-[470px] flex flex-col mb-2 custom-sm:mb-0 rounded-md overflow-hidden cursor-pointer hover:custom-sm:scale-110 transition-all duration-500 ease-in-out">
                    <div className="w-full h-[278.16px] flex flex-col justify-center bg-light-gray">
                        <img
                            key={index}
                            src={image.preview_image}
                            alt=""
                            className="w-full"
                        />
                    </div>

                    <div className="relative w-full h-[191.84px] bg-gradient-to-b from-light-gray to-very-dark-blue text-center text-white font-theme-oxanium py-1">
                        <h3 className="mx-7 mt-2 font-bold text-xl">{image.name}</h3>
                        <p className="mt-1 font-semibold text-sm">Issue Date: {image.date}</p>
                        <p className="font-semibold text-sm">Issuer: {image.issuer} (via {image.source})</p>

                        <button className="absolute top-0 right-0 w-7 h-7 flex justify-center items-center rounded-full">
                            <a href={image.links.source_link} target="__blank">
                                <i className="las la-info-circle text-xl hover:text-teal-400"></i>
                            </a>
                        </button>

                        <div className="absolute bottom-3 w-full flex justify-between px-5 font-semibold text-sm">
                            <span>Certificates:</span>

                            <p className="w-full flex justify-between ml-5 underline underline-offset-2">
                                <a href={image.links.certificate_link} className="hover:text-teal-400">
                                    Main Ver.
                                </a>

                                <a href={image.links.pmi_link} className={`${image.links.pmi_link != '' ? 'inline' : 'hidden'} hover:text-teal-400 `}>
                                    PMI Ver.
                                </a>

                                <a href={image.links.nasba_link} className={`${image.links.nasba_link != '' ? 'inline' : 'hidden'} hover:text-teal-400`}>
                                    NASBA Ver.
                                </a>
                            </p>
                        </div>
                    </div>

                </div>
            ))}
        </>
    );
}