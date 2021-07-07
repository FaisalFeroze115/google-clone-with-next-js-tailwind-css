import Image from 'next/image'

const Avatar = ({url, className}) => {
    return (
        <Image 
            loading="lazy"
            width={40}
            height={40}
            src={url}
            alt="profile pic"
            className={`rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
        />
    )
}

export default Avatar
