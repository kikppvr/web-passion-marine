import Image from "next/image";

interface ServiceCardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    icon: React.ReactNode;
    className?: string;
}

export default function ServiceCard({
    title,
    description,
    imageSrc,
    imageAlt,
    icon,
    className = "",
}: ServiceCardProps) {
    return (
        <div className={`card-services ${className}`}>
            <div className='card-services__icon'>{icon}</div>
            <div className='card-services__container'>
                <Image src={imageSrc} alt={imageAlt} fill className='card-services__image' />
                <div className='card-services__overlay' />
                <div className='card-services__content'>
                    <h3 className='card-services__title'>{title}</h3>
                    <p className='card-services__description'>{description}</p>
                </div>
            </div>
        </div>
    );
}
