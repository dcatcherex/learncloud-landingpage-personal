import { CheckIcon } from "lucide-react"


const Progress = () => {
    const steps = [
        { name: 'photographs', href: '#', status: 'complete' },
        { name: 'question response', href: '#', status: 'complete' },
        { name: 'short conversations', href: '#', status: 'current' },
        { name: 'short talk', href: '#', status: 'upcoming' },
        { name: 'incomplete sentences', href: '#', status: 'upcoming' },
        { name: 'text completion', href: '#', status: 'upcoming' },
        { name: 'reading complehension', href: '#', status: 'upcoming' },
    ]
      
      function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
      }

  return (
    <nav className="w-full check-red" aria-label="Progress">
    <ol role="list" className="relative flex items-center">
      {steps.map((step, stepIdx) => (
        <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative')}>
          {step.status === 'complete' ? (
            <>
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="h-0.5 w-full bg-primary check-green" />
              </div>
              <a
                href="#"
                className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary hover:bg-indigo-900"
              >
                <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                <span className="sr-only">{step.name}</span>
              </a>
              <div className="absolute  transform -translate-x-1/2  text-neutral-500 text-xs capitalize top-10 max-w-20 left-4 text-center whitespace-normal">{step.name}</div>
            </>
          ) : step.status === 'current' ? (
            <>
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="h-0.5 w-full bg-gray-300" />
              </div>
              <div
                className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-white"
                aria-current="step"
                >
                <span className="font-medium text-primary pt-1"  aria-hidden="true">{stepIdx+1}</span>
                <div className="absolute  transform -translate-x-1/2  text-neutral-500 text-xs capitalize top-10 max-w-20 left-4 text-center whitespace-normal">{step.name}</div>
                <span className="sr-only">{step.name}</span>
              </div>
            </>
          ) : (
            <>
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="h-0.5 w-full bg-gray-300" />
              </div>
              <a
                href="#"
                className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
              >
                
                <span className="font-medium text-gray-300 pt-1"  aria-hidden="true">{stepIdx+1}</span>
                <div className="absolute  transform -translate-x-1/2  text-neutral-500 text-xs capitalize top-10 max-w-20 left-3.5 text-center whitespace-normal">{step.name}</div>
                <span className="sr-only">{step.name}</span>
              </a>
            </>
          )}
        </li>
        
      ))}
    <div className="absolute top-0 h-0.5 w-full bg-gray-300"></div>
    </ol>
  </nav>
  )
}
export default Progress