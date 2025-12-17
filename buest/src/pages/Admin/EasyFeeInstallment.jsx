import { useState } from 'react'
import { DollarSign, Calendar, CreditCard, CheckCircle, AlertCircle, Download, Calculator } from 'lucide-react'
import Card from '../../components/Card'
import Button from '../../components/Button'
import Input from '../../components/Input'

const EasyFeeInstallment = () => {
  const [installmentPlan, setInstallmentPlan] = useState('semester')
  const [calculateData, setCalculateData] = useState({
    totalFee: '',
    downPayment: '30',
    installmentCount: '3'
  })

  const plans = [
    {
      id: 'semester',
      name: 'Semester Plan',
      description: 'Pay fees in 3 installments per semester',
      installments: 3,
      interval: 'Monthly',
      interest: '0%',
      processingFee: '$50'
    },
    {
      id: 'annual',
      name: 'Annual Plan',
      description: 'Pay annual fees in 6 monthly installments',
      installments: 6,
      interval: 'Monthly',
      interest: '0%',
      processingFee: '$75'
    },
    {
      id: 'custom',
      name: 'Custom Plan',
      description: 'Create your own payment schedule',
      installments: 'Flexible',
      interval: 'Custom',
      interest: '0%',
      processingFee: '$100'
    }
  ]

  const selectedPlan = plans.find(plan => plan.id === installmentPlan) || plans[0]

  const feeStructure = [
    { program: 'Undergraduate Engineering', annualFee: '$15,000', semesterFee: '$7,500' },
    { program: 'Postgraduate Business', annualFee: '$20,000', semesterFee: '$10,000' },
    { program: 'Undergraduate Arts', annualFee: '$12,000', semesterFee: '$6,000' },
    { program: 'Doctoral Programs', annualFee: '$25,000', semesterFee: '$12,500' }
  ]

  const calculateInstallment = () => {
    const total = parseFloat(calculateData.totalFee) || 0
    const downPaymentPercent = parseFloat(calculateData.downPayment) || 0
    const installmentCount = parseInt(calculateData.installmentCount) || 1
    
    const downPaymentAmount = total * (downPaymentPercent / 100)
    const remainingAmount = total - downPaymentAmount
    const installmentAmount = remainingAmount / installmentCount
    
    return {
      downPaymentAmount: downPaymentAmount.toFixed(2),
      installmentAmount: installmentAmount.toFixed(2),
      remainingAmount: remainingAmount.toFixed(2)
    }
  }

  const calculation = calculateInstallment()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-[13rem]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Easy Fee Installment Plan</h1>
            <p className="text-xl text-white">
              Flexible payment options to make quality education more accessible.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Plan Selection */}
            <Card className="mb-8" padding="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Choose Your Payment Plan</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {plans.map(plan => (
                  <button
                    key={plan.id}
                    onClick={() => setInstallmentPlan(plan.id)}
                    className={`p-6 border-2 rounded-xl text-left transition-all ${
                      installmentPlan === plan.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-primary" />
                      </div>
                      {installmentPlan === plan.id && (
                        <CheckCircle className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Installments:</span>
                        <span className="font-semibold">{plan.installments}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Interval:</span>
                        <span className="font-semibold">{plan.interval}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Interest:</span>
                        <span className="font-semibold">{plan.interest}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Selected Plan Details */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-primary mb-4">Selected Plan Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Plan Benefits</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        Zero interest charges
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        Flexible payment dates
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        Online payment options
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700">
                        <AlertCircle className="w-4 h-4 text-blue-500 mr-3" />
                        Minimum 30% down payment
                      </li>
                      <li className="flex items-center text-gray-700">
                        <AlertCircle className="w-4 h-4 text-blue-500 mr-3" />
                        Valid student status
                      </li>
                      <li className="flex items-center text-gray-700">
                        <AlertCircle className="w-4 h-4 text-blue-500 mr-3" />
                        No outstanding dues
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Fee Calculator */}
            <Card padding="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary">Fee Calculator</h2>
                <Calculator className="w-8 h-8 text-primary" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Input
                  label="Total Fee Amount ($)"
                  type="number"
                  value={calculateData.totalFee}
                  onChange={(e) => setCalculateData({...calculateData, totalFee: e.target.value})}
                  placeholder="Enter total fee"
                  startIcon={<DollarSign className="w-5 h-5" />}
                />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Down Payment (%)
                  </label>
                  <select
                    value={calculateData.downPayment}
                    onChange={(e) => setCalculateData({...calculateData, downPayment: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  >
                    {['30', '40', '50', '60'].map(percent => (
                      <option key={percent} value={percent}>{percent}%</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Installments
                  </label>
                  <select
                    value={calculateData.installmentCount}
                    onChange={(e) => setCalculateData({...calculateData, installmentCount: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  >
                    {['2', '3', '4', '5', '6'].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Calculation Results */}
              {calculateData.totalFee && (
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">Payment Schedule</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-white rounded-lg border">
                      <div className="text-sm text-gray-600 mb-2">Down Payment</div>
                      <div className="text-2xl font-bold text-primary">${calculation.downPaymentAmount}</div>
                      <div className="text-sm text-gray-600 mt-2">Due immediately</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border">
                      <div className="text-sm text-gray-600 mb-2">Monthly Installment</div>
                      <div className="text-2xl font-bold text-primary">${calculation.installmentAmount}</div>
                      <div className="text-sm text-gray-600 mt-2">For {calculateData.installmentCount} months</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border">
                      <div className="text-sm text-gray-600 mb-2">Total Remaining</div>
                      <div className="text-2xl font-bold text-primary">${calculation.remainingAmount}</div>
                      <div className="text-sm text-gray-600 mt-2">After down payment</div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Apply Now */}
            <Card className="bg-gradient-to-b from-primary to-primary-light text-white" padding="p-8">
              <h3 className="text-xl font-bold mb-4 text-white">Apply Now</h3>
              <p className="text-red-500 mb-6">
                Submit your installment plan application online.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-white">Processing Time</div>
                  <div className="font-semibold text-white">24-48 Hours</div>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-sm text-white">Required Documents</div>
                  <div className="font-semibold text-white">Student ID, Fee Invoice</div>
                </div>
              </div>
              
              <Button
                variant="secondary"
                className="w-full mt-6 bg-blue text-primary hover:bg-gray-100"
              >
                Apply for Installment Plan
              </Button>
            </Card>

            {/* Fee Structure */}
            <Card title="Fee Structure" padding="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 font-semibold text-gray-700">Program</th>
                      <th className="text-right p-3 font-semibold text-gray-700">Annual Fee</th>
                      <th className="text-right p-3 font-semibold text-gray-700">Semester Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((fee, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="p-3 text-gray-900">{fee.program}</td>
                        <td className="p-3 text-right font-medium text-primary">{fee.annualFee}</td>
                        <td className="p-3 text-right text-gray-700">{fee.semesterFee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Important Dates */}
            <Card title="Important Dates" padding="p-6">
              <div className="space-y-4">
                {[
                  { date: "2024-12-05", event: "Spring Semester Fee Due", status: "Upcoming" },
                  { date: "2024-12-15", event: "Installment 1 Due Date", status: "Current" },
                  { date: "2025-01-15", event: "Installment 2 Due Date", status: "Future" },
                  { date: "2025-02-15", event: "Installment 3 Due Date", status: "Future" }
                ].map((item, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-primary">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-semibold">
                          {new Date(item.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        item.status === 'Current' ? 'bg-green-100 text-green-800' :
                        item.status === 'Upcoming' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-900">{item.event}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Resources */}
            <Card title="Resources" padding="p-6">
              <div className="space-y-3">
                <a href="#" className="flex items-center p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <Download className="w-4 h-4 mr-3" />
                  <span>Installment Agreement Form</span>
                </a>
                <a href="#" className="flex items-center p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <Download className="w-4 h-4 mr-3" />
                  <span>Payment Schedule Template</span>
                </a>
                <a href="#" className="flex items-center p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <Download className="w-4 h-4 mr-3" />
                  <span>FAQ Document</span>
                </a>
              </div>
            </Card>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Accepted Payment Methods</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Credit Card", icon: "💳", description: "Visa, MasterCard, Amex" },
              { name: "Bank Transfer", icon: "🏦", description: "Online & Wire Transfer" },
              { name: "UPI", icon: "📱", description: "Instant Mobile Payments" },
              { name: "Cheque", icon: "🧾", description: "Demand Drafts" }
            ].map((method, index) => (
              <Card key={index} className="text-center" padding="p-6">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h4 className="font-bold text-primary mb-2">{method.name}</h4>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EasyFeeInstallment;