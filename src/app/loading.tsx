import '../app/css/global/loading.css';

export default function Loading() {
    return (
        <>
        <div className=''>
            <div className={`loading flex items-center justify-center flex-col p-10 gap-5`}>            
                <div className="skeleton-animation skeleton-text p-5 text-center"/>
                <div className="skeleton-animation skeleton-text p-5 text-center"/>
                <div className="skeleton-animation skeleton-text p-5 text-center"/>
                <div className="skeleton-animation skeleton-text p-5 text-center"/>
                <div className="skeleton-animation skeleton-text p-5 text-center"/>
                <div className="skeleton-animation skeleton-text p-5 text-center"/>
                <div className="skeleton-animation skeleton-text p-5 text-center"/>
                <div className="skeleton-animation skeleton-text p-5 text-center"/>
                <div className="skeleton-animation skeleton-text p-5 text-center"/>
            </div>
        </div>
        
        
        </>
         
    );
}