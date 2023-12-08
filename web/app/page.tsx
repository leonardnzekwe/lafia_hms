import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <div>
      {/* Header Section */}
      <div className='relative'>
        <Image
          className='object-cover w-full h-full'
          src='/lafia_home.jpeg'
          fill={true}
          alt='Home Background'
        />
        <div id="home" className='text-white text-lg bg-black/70 relative'>
          {/* Nav Section */}
          <div className='flex flex-row p-5 top-0 sticky'>
            <Link href="/" className='left-0 hover:text-teal-500'>Lafia HMS</Link>
            <div className="ml-auto space-x-3">
              <Link href='#about' className='hover:text-teal-500'>About Project</Link>
              <Link href='#feature' className='hover:text-teal-500'>Features</Link>
              <Link href='#team' className='hover:text-teal-500'>Dev Team</Link>
            </div>
          </div>
          <div className='flex flex-col items-center h-screen justify-center space-y-5'>
            <div className='text-5xl text-center mb-4 font-bold'>
              <p className='uppercase'>Empower your hospital</p>
              <p>and enhance your patient&apos;s care</p>
            </div>
            <Link href='/dashboard' className='bg-teal-600 rounded-lg px-20 py-1 hover:bg-teal-800 font-bold'>Get Started</Link>
          </div>
        </div>
      </div>
      {/* Main Section */}
      <div className='flex flex-col items-center justify-center space-y-5'>
        {/* Demo Video Section */}
        <div className="relative w-full p-4 pb-[52.8125%]">
          <iframe
            src="https://www.loom.com/embed/1ec9d169ebc84533aa0ae9bfec13c741?sid=f6d40414-29e5-4455-ad32-c1442a3dbda3?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <div id="about">
          <div className='text-center mt-4 font-bold'>About Project</div>
          <div className='bg-teal-500 rounded-lg m-4 p-4 font-bold'>
            <p className='p-4 m-4'>
              Lafia HMS strives to solve the limitations of traditional
              record keeping and appointment booking in hospitals.
              Most hospitals still keep the health records on a book registry
              and make appointments over the counter, this method has alot of limitations.
            </p>
            <p className='text-center'>Here are some of the limitations:</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-2 text-center'>
              <p className='bg-teal-600 p-2 rounded-lg'>Data loss due to environmental hazards like fire outbreak, insects or moisture.</p>
              <p className='bg-teal-600 p-2 rounded-lg'>Management of these health registries are difficult to store as the hospital grows.</p>
              <p className='bg-teal-600 p-2 rounded-lg'>Moving of these registries from office to office to be used by the doctors/nurses is hard work and quite inefficient.</p>
              <p className='bg-teal-600 p-2 rounded-lg'>The records also suffer from wrong data.</p>
              <p className='bg-teal-600 p-2 rounded-lg'>The registry records suffer from inputs with illegible writing.</p>
              <p className='bg-teal-600 p-2 rounded-lg'>It becomes tedious work to find a particular patient record due to the bloated registry.</p>
              <p className='bg-teal-600 p-2 rounded-lg'>Some hospitals do not even keep records of the patients at all or keep the most recent ones.</p>
              <p className='bg-teal-600 p-2 rounded-lg'>Inaccessibility of one&apos;s health history on the side of the patient.</p>
              <p className='bg-teal-600 p-2 rounded-lg'>There is always disparity in booking of appointments, coupled with long queue ups.</p>
            </div>
            <p className='p-4 m-4'>
              So these limitations are what we hope to solve,
              by building a management system that will be used internally
              to manage the hospital records to provide patients with
              their health history and appointments.
            </p>
          </div>
        </div>
        <div id="feature">
          <p className='text-center font-bold'>Features</p>
          <div className='bg-teal-500 rounded-lg m-4 p-4 font-bold'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-2 text-center'>
              <p className='bg-teal-600 p-2 rounded-lg'>Appointment Booking</p>
              <p className='bg-teal-600 p-2 rounded-lg'>Record Management</p>
              <p className='bg-teal-600 p-2 rounded-lg'>Inventory Management</p>
              <p className='bg-teal-600 p-2 rounded-lg'>Medical History</p>
              <p className='bg-teal-600 p-2 rounded-lg'>Staff Management</p>
              <p className='bg-teal-600 p-2 rounded-lg'>Prescription Automation</p>
            </div>
          </div>
        </div>
        <div id="team">
          <p className='text-center font-bold'>Dev Team</p>
          <div className='bg-teal-500 rounded-lg m-4 p-4 font-bold'>
            <p className='text-center'>
              Built as Portfolio Project for
              <Link href='https://holbertonschool.com' target='_blank' rel='noopener noreferrer' className='text-gray-600 hover:text-black'> Holberton School</Link>
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 text-center'>
              <div className='bg-teal-600 p-2 rounded-lg'>
                <p className='text-gray-800'>Rahmat Folorunsho</p>
                <p>UI/UX/Graphics, Frontend</p>
                <div className='flex- flex-col items-center justify-center space-x-2'>
                  <Link href='https://github.com/rahma-cloud' target='_blank' rel='noopener noreferrer' className='hover:text-black'>Github</Link>
                  <Link href='https://twitter.com/rahma_ix' target='_blank' rel='noopener noreferrer' className='hover:text-black'>Twitter</Link>
                  <Link href='https://www.linkedin.com/in/rahmat-folorunsho-873256189' target='_blank' rel='noopener noreferrer' className='hover:text-black'>LinkedIn</Link>
                </div>
              </div>
              <div className='bg-teal-600 p-2 rounded-lg'>
                <p className='text-gray-800'>Ifeanyi Akamigbo</p>
                <p>Frontend, Backend</p>
                <div className='flex- flex-col items-center justify-center space-x-2'>
                  <Link href='https://github.com/valentine1244' target='_blank' rel='noopener noreferrer' className='hover:text-black'>Github</Link>
                  <Link href='https://twitter.com/akamigboi' target='_blank' rel='noopener noreferrer' className='hover:text-black'>Twitter</Link>
                  <Link href='https://www.linkedin.com/in/ifeanyi-akamigbo-9678ba192' target='_blank' rel='noopener noreferrer' className='hover:text-black'>LinkedIn</Link>
                </div>
              </div>
              <div className='bg-teal-600 p-2 rounded-lg'>
                <p className='text-gray-800'>Leonard Nzekwe</p>
                <p>Backend, DevOps</p>
                <div className='flex- flex-col items-center justify-center space-x-2'>
                  <Link href='https://github.com/leonardnzekwe' target='_blank' rel='noopener noreferrer' className='hover:text-black'>Github</Link>
                  <Link href='https://twitter.com/leonardnzekwe' target='_blank' rel='noopener noreferrer' className='hover:text-black'>Twitter</Link>
                  <Link href='https://www.linkedin.com/in/leonardnzekwe' target='_blank' rel='noopener noreferrer' className='hover:text-black'>LinkedIn</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <div className='sticky bottom-0 bg-teal-500 p-2 my-4 mx-auto w-fit rounded-lg font-bold'>
        <div className='flex flex-row items-center justify-center space-x-5'>
          <Link href='https://github.com/leonardnzekwe/lafia_hms.git' target='_blank' rel='noopener noreferrer' className='hover:text-black'>Github Repo</Link>
          <Link href='https://www.loom.com/share/1ec9d169ebc84533aa0ae9bfec13c741?sid=36d0e1a6-4e40-4fcc-8908-23ca9717f8d8' target='_blank' rel='noopener noreferrer' className='hover:text-black'>Demo Video</Link>
          <Link href={process.env.NEXT_PUBLIC_BACKEND_URL || ''} target='_blank' rel='noopener noreferrer' className='hover:text-black'>Restful API</Link>
        </div>
      </div>
      <Link href='#home' className='fixed bottom-0 right-0 m-4 hover:text-black'>Back to Top</Link>
    </div>
  );
}
