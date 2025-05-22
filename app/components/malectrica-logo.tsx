import type React from "react"

interface MalectricaLogoProps {
  className?: string
}

export const MalectricaLogo: React.FC<MalectricaLogoProps> = ({ className = "h-6 w-6 text-malectrica-brightBlue" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 78.517441 158.90208"
      version="1.1"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(-56.386525,-54.771643)">
        <path
          style={{
            fill: "currentColor",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 5.74616,
            strokeDasharray: "none",
            strokeOpacity: 1,
            paintOrder: "stroke fill markers",
          }}
          d="M 124.46822,54.771646 77.538733,80.034962 c -3.0922,11.29019 -7.782658,28.385178 -13.368846,48.586728 -7.804354,28.24767 -8.111266,29.37441 -7.646068,29.14594 0.2747,-0.13814 4.4765,-2.4281 9.344897,-5.11584 4.876458,-2.67356 10.372777,-5.6649 12.221497,-6.66503 l 3.37269,-1.81519 -5.49551,24.9557 c -3.03401,13.721 -6.455885,29.30432 -7.637772,34.63316 -1.852071,8.39218 -2.191958,10.24153 -1.865087,9.86865 0.03409,-0.0378 12.589899,-20.81742 27.896097,-46.16461 15.306199,-25.34718 30.731279,-50.87365 34.259029,-56.72331 3.54174,-5.8577 6.36474,-10.69273 6.28256,-10.73886 -0.0902,-0.0604 -1.89469,0.95245 -4.48122,2.48587 -8.22903,4.88642 -32.192369,18.89139 -32.288609,18.85327 -0.0659,-0.0181 9.162359,-23.363378 20.499429,-51.879056 z"
        />
      </g>
    </svg>
  )
}
