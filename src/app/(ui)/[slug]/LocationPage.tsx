import Image from 'next/image';

const LocationPage = () => {
  return (
    <>
      <button>
        <Image
          src='/right-arrow.png'
          alt='стрілка вправо'
          width={44}
          height={16}
        />
      </button>
    </>
  );
};

export default LocationPage;
