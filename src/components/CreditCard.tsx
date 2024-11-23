interface CreditCardProps {
  balance: number
  cardHolder: string
  validThru: string
  cardNumber: string
  isDark?: boolean
}

export default function CreditCard({ 
  balance, 
  cardHolder, 
  validThru, 
  cardNumber, 
  isDark = true 
}: CreditCardProps) {
  return (
    <div className={`p-6 rounded-xl ${isDark ? 'bg-[#2B3674]' : 'bg-white border'} w-full max-w-sm`}>
      <div className="flex justify-between items-start mb-8">
        <div>
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>Balance</p>
          <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-[#2B3674]'}`}>
            ${balance.toLocaleString()}
          </p>
        </div>
        <div className="w-12 h-8">
          <img 
            src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" 
            alt="Card chip" 
            className="w-full h-full object-contain" 
          />
        </div>
      </div>
      
      <div className="mb-6">
        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>CARD HOLDER</p>
        <p className={`font-medium ${isDark ? 'text-white' : 'text-[#2B3674]'}`}>{cardHolder}</p>
      </div>
      
      <div className="flex justify-between items-end">
        <div className="flex-1">
          <p className={`text-lg tracking-wider font-medium ${isDark ? 'text-white' : 'text-[#2B3674]'}`}>
            {cardNumber}
          </p>
        </div>
        <div>
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>VALID THRU</p>
          <p className={`font-medium ${isDark ? 'text-white' : 'text-[#2B3674]'}`}>{validThru}</p>
        </div>
      </div>
    </div>
  )
}