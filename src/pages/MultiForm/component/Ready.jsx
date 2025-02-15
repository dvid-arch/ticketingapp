import ticket from '../../../assets/tickect.svg'
import QRCode from 'react-qr-code';


function Ready({handleBookAnother}) {

    function handledBookAnother(e){
        e.preventDefault()
        console.log('booking another')
    }
    function handleDownload(){
        e.preventDefault()
        console.log('trying to download')
    }

    
    return (
        <div className="bg-[#041E23]  px-6 py-8 sm:p-12 rounded-[40px] flex flex-col gap-8 mx-auto w-full max-w-[700px]">
            <div className="flex flex-col gap-3 ">

                <div className="flex justify-between gap-3 items-start sm:items-center">
                    <h1 className="font-serif text-[24px] sm:text-[32px] text-white ">Ready</h1>
                    <span className="text-white text-[16px]">Step <span>{3}</span>/<span>3</span></span>
                </div>
                <div className="bg-[#0E464F]">
                    <span className={`h-1 block bg-[#24A0B5]`} style={{ width: `${(3 / 3) * 100}%` }} ></span>
                </div>
            </div>
            <div className="w-full  flex flex-col gap-8 " >
                <div className='text-white sm:text-center flex flex-col gap-4'>
                    <h2 className='text-[32px]'>Your Ticket is Booked</h2>
                    <p className='text-[#fafafa]'>you can download or Check your email for a copy</p>
                </div>
                <div className='flex flex-col gap-6 justify-center items-center'>

                    <div className='text-center py-8 sm:px-[21px] relative w-fit' >
                        <div className=' relative flex'>
                            <QRCode
                                value="https://www.mywebsite.com"
                                size={undefined}
                                level="H"
                                style={{ width: '25%', height: '69%' }}
                                className='absolute top-[8%] z-10 left-[2.5%] flex-1'
                            />


                            <img src={ticket} alt="" className='w-full' />
                        </div>
                        <div className='flex-1 flex absolute  top-10 z-10 bg-blue-400 ml-[27%] items-start w-[%]'>

                            <div className='w-full flex-1'>
                                <h2>Techember Fest "25</h2>
                                <p className="max-w-[340px] text-[10px] text-left">
                                    📍 04 Rumens road, Ikoyi, Lagos <br />
                                    📅 March 15, 2025 | 7:00 PM
                                </p>

                            </div>
                            <div className=' -rotate-90 bg-black w-fit self-end h-full absolute top-10 right-0'>
                                <h2 className='font-bold text-[12px] text-nowrap text-white'>Techember Fest "25</h2>
                                <h2 className='font-bold text-[12px] text-nowrap text-white'>Username: <span className='font-semibold'>John Doe</span></h2>
                            </div>
                        </div>
                    </div>


                    <div className="sm:border rounded-[24px] w-full sm:px-12 sm:border-[#0E464F] flex flex-col-reverse sm:flex-row justify-center gap-2 md:gap-8">
                        <button onClick={handledBookAnother} className="rounded-[8px] capitalize block w-full py-3 px-6 border border-[#2BA4B9] bg-[#041E23] text-white">
                            Book Another Ticket
                        </button>
                        <button onClick={handleDownload} className="rounded-[8px] capitalize block w-full py-3 px-6 bg-[#2BA4B9] border border-[#2BA4B9] text-white">
                            Download Ticket
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Ready