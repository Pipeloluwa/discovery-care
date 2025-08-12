import Image from 'next/image'

const LogoComponent = () => {
  return (
    <div>
      <Image alt='logo' src={"/images/logos/logo__.png"} width={100} height={100} priority={true} className='object-cover w-full h-full flex'>
      </Image>
    </div>
  )
}

export default LogoComponent