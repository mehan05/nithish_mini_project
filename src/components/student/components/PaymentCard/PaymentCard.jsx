import React from 'react'

const PaymentCard = () => {
    return(
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-xl p-10   ">
        <div className="text-center mb-6 ">
        <h2 className="text-lg font-semibold">Full course Fees:</h2>
        <p className="text-[#5751E1] text-2xl font-bold">$150.00</p>
        </div>

        <div className="space-y-4 text-gray-700">
        <div className="flex justify-between   gap-6 items-center">
            <div className="flex items-center gap-2">
            <img src="/payment-card-uparrow.png" alt="Level" className="w-6 h-6" />
            <span>Level:</span>
            </div>
            <span className="text-[#5751E1]">Beginner</span>
        </div>

        <div className="flex justify-between gap-6 items-center">
            <div className="flex items-center gap-2">
            <img src="/payment-card-clock.png" alt="Duration" className="w-6 h-6" />
            <span>Duration:</span>
            </div>
            <span className="text-[#5751E1]">11hrs and 30 mins</span>
        </div>

        <div className="flex justify-between  gap-6 items-center">
            <div className="flex items-center gap-2">
            <img src="/payment-card-books.png" alt="Modules" className="w-6 h-6" />
            <span>Modules:</span>
            </div>
            <span className="text-[#5751E1]">12 modules</span>
        </div>

        <div className="flex justify-between   gap-6  items-center">
            <div className="flex items-center gap-2">
            <img src="/payment-card-cert.png" alt="Certification" className="w-6 h-6" />
            <span>Certification:    </span>
            </div>
            <span className="text-[#5751E1] ml-5">YES</span>
        </div>

        <div className="flex justify-between  gap-6 items-center">
            <div className="flex items-center gap-2">
            <img src="/payment-card-quizz.png" alt="Quiz" className="w-6 h-6" />
            <span>Quiz:</span>
            </div>
            <span className="text-[#5751E1]">12 Quizzes</span>
        </div>
        </div>

        <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold mb-3">Payment Details:</h3>
        <div className="flex justify-center  items-center space-x-4   gap-6 mb-6">
            <img src="/payment-card-gpay.png" alt="GPay" className="w-8 h-8" />
            <img src="/payment-card-round.png" alt="Mastercard" className="w-8 h-8" />
            <img src="/payment-card-visa.png" alt="Visa" className="w-auto h-5" />
        </div>
        <button >
        <img
                  src="/enrollnow_img.png"
                  className="h-10 w-auto object-contain hover:scale-105"
                  alt="Enroll Now"
                />
        </button>
        </div>
    </div>
    );
}

export default PaymentCard