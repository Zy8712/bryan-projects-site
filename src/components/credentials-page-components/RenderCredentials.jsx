import credentialData from "../../credentials_data.json";

export default function RenderCredentials() {
    return (
        <>
            {credentialData.map((image, index) => (
                <div className="w-[360px] h-36 flex justify-between bg-gradient-to-b from-light-gray to-very-dark-blue rounded-md overflow-hidden cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out">
                    <img
                        key={index}
                        src={image.preview_image}
                        alt=""
                        className="w-36 h-full"
                    />
                    <div className="relative w-[216px] h-full text-center text-white font-theme-oxanium p-1">
                        <h3 className="mt-1 font-bold text-base leading-5">{image.name}</h3>
                        <p className="mt-1 font-semibold text-xs">Issue Date: {image.date}</p>
                        <p className="font-semibold text-xs">Issuer: {image.issuer} (via {image.source})</p>
                        <div className="absolute left-0 bottom-1 w-full flex justify-between px-2">
                            <a href={image.links.source_link} className="font-semibold text-sm underline underline-offset-1 hover:text-teal-400">
                                Source
                                <i className="las la-external-link-alt ml-1"></i>
                            </a>
                            <a href={image.links.certificate_link} className="font-semibold text-sm underline underline-offset-1 hover:text-teal-400">
                                Credential
                                <i className="las la-external-link-alt ml-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}