export const MILESTONES = [
  {
    title: 'Project Inception and Ideation',
    content: 'We wanted to create something cool that would channel energy towards Mars colonization and support the future decentralized economy of the Red Planet. Drafted the whitepaper and kick-started project.',
    icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M26.5682 20.6023H25.2046V25.375H26.5682V20.6023Z" fill="#FFC22E"/>\n' +
      '<path d="M8.84131 22.6478H24.5232C24.5232 21.7487 24.5232 3.09242 24.5232 2.19324H8.84131V22.6478ZM19.4095 21.2841H13.9549C13.7666 21.2841 13.614 21.1316 13.614 20.9432C13.614 20.7549 13.7666 20.6023 13.9549 20.6023H19.4095C19.5977 20.6023 19.7504 20.7549 19.7504 20.9432C19.7504 21.1316 19.5977 21.2841 19.4095 21.2841ZM13.896 8.48846C15.7959 7.24012 18.2811 7.39762 20.0052 8.85726C21.2567 8.47203 22.0582 8.52876 22.3869 9.02894C22.7153 9.52885 22.4501 10.2863 21.6013 11.2808C21.847 12.0885 21.8889 12.9493 21.713 13.7991C21.2093 16.233 19.0708 17.8776 16.7091 17.8776C15.4786 17.8776 14.3156 17.4396 13.4042 16.6683C12.6426 16.9029 11.4595 17.1615 11.0224 16.4965C10.6937 15.9962 10.9596 15.2381 11.8098 14.2425C11.1722 12.1304 11.9605 9.76033 13.896 8.48846Z" fill="#FFC22E"/>\n' +
      '<path d="M12.845 16.1166C12.534 15.7579 12.2957 15.3922 12.0949 14.9742C11.607 15.6142 11.5153 16.0041 11.5927 16.1219C11.67 16.2397 12.0642 16.3104 12.845 16.1166Z" fill="#FFC22E"/>\n' +
      '<path d="M21.3145 10.5506C21.8021 9.91095 21.8936 9.52129 21.8163 9.40347C21.7389 9.28572 21.3447 9.21508 20.564 9.40885C20.8699 9.76163 21.1107 10.128 21.3145 10.5506Z" fill="#FFC22E"/>\n' +
      '<path d="M7.47759 26.0569H8.15941V2.19324H7.75032C6.47204 2.19324 5.43213 3.23315 5.43213 4.51142V26.9831C5.93224 26.4158 6.66357 26.0569 7.47759 26.0569Z" fill="#FFC22E"/>\n' +
      '<path d="M5.43164 28.7841C5.43164 29.912 6.34923 30.8296 7.4771 30.8296H24.5226V28.7841H17.3635C17.1752 28.7841 17.0226 28.6315 17.0226 28.4432C17.0226 28.2549 17.1752 28.1023 17.3635 28.1023H24.5226V26.7386H7.47716C6.34923 26.7386 5.43164 27.6562 5.43164 28.7841ZM15.318 27.7614C15.6946 27.7614 15.9998 28.0667 15.9998 28.4432C15.9998 28.8197 15.6946 29.125 15.318 29.125C14.9414 29.125 14.6362 28.8197 14.6362 28.4432C14.6362 28.0667 14.9414 27.7614 15.318 27.7614Z" fill="#FFC22E"/>\n' +
      '<path d="M8.84131 26.0569H24.5232C24.5232 25.3772 24.5232 24.0454 24.5232 23.3296H8.84131V26.0569Z" fill="#FFC22E"/>\n' +
      '<path d="M26.5682 3.55682H25.2046V7.64773H26.5682V3.55682Z" fill="#FFC22E"/>\n' +
      '<path d="M26.5682 15.1477H25.2046V17.1932H26.5682V15.1477Z" fill="#FFC22E"/>\n' +
      '<path d="M26.5682 12.4205H25.2046V14.4659H26.5682V12.4205Z" fill="#FFC22E"/>\n' +
      '<g opacity="0.3">\n' +
      '<path d="M14.1694 16.3985C15.6081 17.4028 17.5767 17.4937 19.1393 16.4669C20.7253 15.4248 21.3953 13.5714 21.0499 11.8772C19.3193 13.6203 16.4569 15.5013 14.1694 16.3985Z" fill="#FFC22E"/>\n' +
      '<path d="M1.68231 24.0113C1.30635 24.0113 1.00049 24.3172 1.00049 24.6931C1.00049 25.0691 1.30635 25.3749 1.68231 25.3749C2.05826 25.3749 2.36412 25.0691 2.36412 24.6931C2.36412 24.3172 2.05833 24.0113 1.68231 24.0113Z" fill="#FFC22E"/>\n' +
      '<path d="M13.569 15.8951C15.9217 15.0619 19.1189 12.9647 20.8246 11.127C19.777 8.50304 16.6027 7.52504 14.2696 9.05811C12.227 10.4003 11.6571 13.1541 12.9993 15.1967C13.1668 15.4514 13.3587 15.6842 13.569 15.8951Z" fill="#FFC22E"/>\n' +
      '<path d="M29.9773 9.01129C29.4133 9.01129 28.9546 9.47009 28.9546 10.034C28.9546 10.598 29.4133 11.0567 29.9773 11.0567C30.5412 11.0567 31 10.598 31 10.034C31 9.47009 30.5412 9.01129 29.9773 9.01129Z" fill="#FFC22E"/>\n' +
      '<path d="M2.36297 15.4885C2.73953 15.4885 3.04479 15.1833 3.04479 14.8067C3.04479 14.4301 2.73953 14.1249 2.36297 14.1249C1.98641 14.1249 1.68115 14.4301 1.68115 14.8067C1.68115 15.1833 1.98641 15.4885 2.36297 15.4885Z" fill="#FFC22E"/>\n' +
      '<path d="M30.319 20.2613C30.6956 20.2613 31.0008 19.9561 31.0008 19.5795C31.0008 19.203 30.6956 18.8977 30.319 18.8977C29.9425 18.8977 29.6372 19.203 29.6372 19.5795C29.6372 19.9561 29.9425 20.2613 30.319 20.2613Z" fill="#FFC22E"/>\n' +
      '<path d="M28.2731 29.8069C28.6497 29.8069 28.9549 29.5016 28.9549 29.1251C28.9549 28.7485 28.6497 28.4432 28.2731 28.4432C27.8966 28.4432 27.5913 28.7485 27.5913 29.1251C27.5913 29.5016 27.8966 29.8069 28.2731 29.8069Z" fill="#FFC22E"/>\n' +
      '<path d="M1.341 2.53411C1.71756 2.53411 2.02282 2.22885 2.02282 1.85229C2.02282 1.47573 1.71756 1.17047 1.341 1.17047C0.96444 1.17047 0.65918 1.47573 0.65918 1.85229C0.65918 2.22885 0.96444 2.53411 1.341 2.53411Z" fill="#FFC22E"/>\n' +
      '<path d="M30.6589 3.21605C31.0354 3.21605 31.3407 2.91079 31.3407 2.53424C31.3407 2.15768 31.0354 1.85242 30.6589 1.85242C30.2823 1.85242 29.9771 2.15768 29.9771 2.53424C29.9771 2.91079 30.2823 3.21605 30.6589 3.21605Z" fill="#FFC22E"/>\n' +
      '</g>\n' +
      '</svg>\n',
    month: 'January - February 2021'
  },
  {
    title: 'Laying the Groundwork',
    content: 'Established a community governance framework to ensure decentralization of project. Started coding smart contracts,  implemented an on-chain infrastructure, and went live on Liquifi exchange! ',
    icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<g clip-path="url(#clip0)">\n' +
      '<path d="M24.7892 17.9261L21.4897 20.1258L24.7892 22.3254V17.9261Z" fill="#FFC22E"/>\n' +
      '<path d="M16.8965 17.9261V22.3254L20.1959 20.1258L16.8965 17.9261Z" fill="#FFC22E"/>\n' +
      '<path d="M24.7892 6.44629L21.4897 8.64596L24.7892 10.8456V6.44629Z" fill="#FFC22E"/>\n' +
      '<path d="M24.7892 23.6661L21.4897 25.8657L24.7892 28.0653V23.6661Z" fill="#FFC22E"/>\n' +
      '<path d="M16.8965 0.70636V5.10571L20.1959 2.90604L16.8965 0.70636Z" fill="#FFC22E"/>\n' +
      '<path d="M23.9633 28.3769L20.8432 26.2968L17.7231 28.3769H23.9633Z" fill="#FFC22E"/>\n' +
      '<path d="M16.8965 12.1862V16.5854L20.1959 14.3858L16.8965 12.1862Z" fill="#FFC22E"/>\n' +
      '<path d="M23.9633 0.394653H17.7231L20.8432 2.47473L23.9633 0.394653Z" fill="#FFC22E"/>\n' +
      '<path d="M24.7892 0.70636L21.4897 2.90604L24.7892 5.10571V0.70636Z" fill="#FFC22E"/>\n' +
      '<path d="M24.7892 12.1862L21.4897 14.3858L24.7892 16.5854V12.1862Z" fill="#FFC22E"/>\n' +
      '<path d="M20.8432 3.33716L17.7231 5.41723H23.9633L20.8432 3.33716Z" fill="#FFC22E"/>\n' +
      '<path d="M20.8432 8.21459L23.9633 6.13452H17.7231L20.8432 8.21459Z" fill="#FFC22E"/>\n' +
      '<path d="M23.9633 11.1572L20.8432 9.07709L17.7231 11.1572H23.9633Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M1.82951 7.56954C2.62076 7.56954 3.26449 6.92581 3.26449 6.13456C3.26449 5.34332 2.62076 4.69958 1.82951 4.69958C1.03826 4.69958 0.394531 5.34332 0.394531 6.13456C0.394531 6.92581 1.03826 7.56954 1.82951 7.56954Z" fill="#FFC22E"/>\n' +
      '<path d="M20.8432 19.6945L23.9633 17.6144H17.7231L20.8432 19.6945Z" fill="#FFC22E"/>\n' +
      '<path d="M23.9633 22.637L20.8432 20.5569L17.7231 22.637H23.9633Z" fill="#FFC22E"/>\n' +
      '<path d="M20.8432 25.4343L23.9633 23.3542H17.7231L20.8432 25.4343Z" fill="#FFC22E"/>\n' +
      '<path d="M20.8432 13.9545L23.9633 11.8745H17.7231L20.8432 13.9545Z" fill="#FFC22E"/>\n' +
      '<path d="M23.9633 16.8971L20.8432 14.817L17.7231 16.8971H23.9633Z" fill="#FFC22E"/>\n' +
      '<path d="M16.8965 6.44629V10.8456L20.1959 8.64596L16.8965 6.44629Z" fill="#FFC22E"/>\n' +
      '<path d="M6.85197 19.0494H5.41699V21.9193H6.85197V19.0494Z" fill="#FFC22E"/>\n' +
      '<path d="M9.00431 19.0494H7.56934V21.9193H9.00431V19.0494Z" fill="#FFC22E"/>\n' +
      '<path d="M13.3094 22.6368H5.41699V28.3767H13.3094V22.6368ZM7.21064 25.8655C6.81437 25.8655 6.49315 25.5442 6.49315 25.148C6.49315 24.7518 6.81437 24.4305 7.21064 24.4305C7.60691 24.4305 7.92813 24.7518 7.92813 25.148C7.92813 25.5442 7.60698 25.8655 7.21064 25.8655ZM9.36311 25.8655C8.96684 25.8655 8.64562 25.5442 8.64562 25.148C8.64562 24.7518 8.96684 24.4305 9.36311 24.4305C9.75938 24.4305 10.0806 24.7518 10.0806 25.148C10.0806 25.5442 9.75945 25.8655 9.36311 25.8655ZM11.5156 25.8655C11.1193 25.8655 10.7981 25.5442 10.7981 25.148C10.7981 24.7518 11.1193 24.4305 11.5156 24.4305C11.9118 24.4305 12.2331 24.7518 12.2331 25.148C12.2331 25.5442 11.9119 25.8655 11.5156 25.8655Z" fill="#FFC22E"/>\n' +
      '<path d="M11.1567 19.0494H9.72168V21.9193H11.1567V19.0494Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M30.529 3.26457C30.9246 3.26457 31.2465 2.9427 31.2465 2.54708C31.2465 2.15146 30.9246 1.82959 30.529 1.82959C30.1334 1.82959 29.8115 2.15146 29.8115 2.54708C29.8115 2.9427 30.1334 3.26457 30.529 3.26457Z" fill="#FFC22E"/>\n' +
      '<path d="M16.8965 23.6661V28.0653L20.1959 25.8657L16.8965 23.6661Z" fill="#FFC22E"/>\n' +
      '<path d="M16.1793 16.1794H14.0269V25.5068H16.1793C16.1793 24.4289 16.1793 17.341 16.1793 16.1794Z" fill="#FFC22E"/>\n' +
      '<path d="M16.1793 26.2242H14.0269V28.3767H16.1793V26.2242Z" fill="#FFC22E"/>\n' +
      '<path d="M11.1568 5.20693L9.7218 3.77195V1.99107C9.7218 1.79297 9.56116 1.63232 9.36306 1.63232C9.16489 1.63232 9.00431 1.79297 9.00431 1.99107V3.77195L7.56934 5.20693V9.00452H11.1568V5.20693Z" fill="#FFC22E"/>\n' +
      '<path d="M29.8116 29.0942H25.1482C25.1479 29.0942 25.1478 29.0942 25.1476 29.0942C25.1472 29.0942 25.1469 29.0942 25.1466 29.0942C22.9306 29.0942 3.90499 29.0942 1.82951 29.0942C1.03826 29.0942 0.394531 29.7379 0.394531 30.5292C0.394531 31.3204 1.03826 31.9641 1.82951 31.9641H29.8116C30.6027 31.9641 31.2466 31.3204 31.2466 30.5292C31.2466 29.7379 30.6027 29.0942 29.8116 29.0942Z" fill="#FFC22E"/>\n' +
      '<path d="M11.9738 9.72198C9.62133 9.72198 8.27051 9.72198 6.75101 9.72198L5.55518 13.3094H13.1696L11.9738 9.72198Z" fill="#FFC22E"/>\n' +
      '<path d="M13.3094 14.0269H5.41699V18.3319H13.3094V14.0269Z" fill="#FFC22E"/>\n' +
      '<path d="M13.309 19.0494H11.874V21.9193H13.309V19.0494Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M13.6687 2.90586C14.0649 2.90586 14.3861 2.58463 14.3861 2.18838C14.3861 1.79212 14.0649 1.47089 13.6687 1.47089C13.2724 1.47089 12.9512 1.79212 12.9512 2.18838C12.9512 2.58463 13.2724 2.90586 13.6687 2.90586Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M4.34151 1.47087C4.73777 1.47087 5.059 1.14964 5.059 0.753377C5.059 0.357119 4.73777 0.0358887 4.34151 0.0358887C3.94525 0.0358887 3.62402 0.357119 3.62402 0.753377C3.62402 1.14964 3.94525 1.47087 4.34151 1.47087Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M0.753133 14.3857C1.14939 14.3857 1.47062 14.0644 1.47062 13.6682C1.47062 13.2719 1.14939 12.9507 0.753133 12.9507C0.356875 12.9507 0.0356445 13.2719 0.0356445 13.6682C0.0356445 14.0644 0.356875 14.3857 0.753133 14.3857Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M2.18868 22.9955C2.58494 22.9955 2.90617 22.6743 2.90617 22.278C2.90617 21.8818 2.58494 21.5605 2.18868 21.5605C1.79242 21.5605 1.47119 21.8818 1.47119 22.278C1.47119 22.6743 1.79242 22.9955 2.18868 22.9955Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M29.4528 7.92826C29.8491 7.92826 30.1703 7.60703 30.1703 7.21077C30.1703 6.81452 29.8491 6.49329 29.4528 6.49329C29.0566 6.49329 28.7354 6.81452 28.7354 7.21077C28.7354 7.60703 29.0566 7.92826 29.4528 7.92826Z" fill="#FFC22E"/>\n' +
      '</g>\n' +
      '<defs>\n' +
      '<clipPath id="clip0">\n' +
      '<rect width="31.2825" height="32" fill="white"/>\n' +
      '</clipPath>\n' +
      '</defs>\n' +
      '</svg>\n',
    month: 'march - april 2021'
  },
  {
    title: '3,2,1... Liftoff - We are here now!',
    content: 'Mars Economy goes live allowing anyone to support projects and stake on the outcomes connected to Mars colonization milestones ',
    icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M16.0353 19.8849C18.584 19.8849 20.6575 17.8114 20.6575 15.2627C20.6575 12.714 18.584 10.6405 16.0353 10.6405C13.4865 10.6405 11.4131 12.714 11.4131 15.2627C11.4131 17.8113 13.4865 19.8849 16.0353 19.8849ZM16.0353 12.7738C17.4077 12.7738 18.5242 13.8903 18.5242 15.2627C18.5242 16.6351 17.4077 17.7516 16.0353 17.7516C14.6629 17.7516 13.5464 16.6351 13.5464 15.2627C13.5464 13.8903 14.6629 12.7738 16.0353 12.7738Z" fill="#FFC22E"/>\n' +
      '<path d="M28.1386 24.5662L24.7447 18.0613C24.3541 19.844 23.6814 21.5569 22.7529 23.1301L28.1386 24.5662Z" fill="#FFC22E"/>\n' +
      '<path d="M9.31675 23.1301C8.38832 21.557 7.71561 19.844 7.325 18.0613L3.93115 24.5663L9.31675 23.1301Z" fill="#FFC22E"/>\n' +
      '<path d="M16.0353 0.0252686C13.0389 1.71402 10.7032 4.25965 9.26367 7.25634H22.8068C21.3673 4.25965 19.0317 1.71409 16.0353 0.0252686Z" fill="#FFC22E"/>\n' +
      '<path d="M16.0356 17.0405C17.0159 17.0405 17.8134 16.243 17.8134 15.2627C17.8134 14.2824 17.0159 13.4849 16.0356 13.4849C15.0553 13.4849 14.2578 14.2824 14.2578 15.2627C14.2578 16.243 15.0553 17.0405 16.0356 17.0405Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M27.7686 5.66272C28.9448 5.66272 29.9019 4.70571 29.9019 3.52939C29.9019 2.35307 28.9448 1.39606 27.7686 1.39606C26.5922 1.39606 25.6353 2.35307 25.6353 3.52939C25.6353 4.70571 26.5922 5.66272 27.7686 5.66272Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M2.52436 12.7738C3.50463 12.7738 4.30214 11.9763 4.30214 10.996C4.30214 10.0158 3.50463 9.21826 2.52436 9.21826C1.54409 9.21826 0.746582 10.0158 0.746582 10.996C0.746582 11.9763 1.54409 12.7738 2.52436 12.7738Z" fill="#FFC22E"/>\n' +
      '<path d="M27.4131 26.9961C26.0944 26.9961 25.003 28.0265 24.9287 29.3419C24.9209 29.4785 24.8354 29.5985 24.7089 29.6506C24.5824 29.7027 24.4372 29.6775 24.3356 29.586C24.0088 29.2915 23.5864 29.1294 23.1464 29.1294C22.7056 29.1294 22.2827 29.292 21.9557 29.5873C21.855 29.6781 21.7112 29.7038 21.5853 29.6534C21.4594 29.603 21.373 29.4853 21.3629 29.3499C21.2938 28.4288 20.5154 27.7072 19.5909 27.7072C19.3944 27.7072 19.2353 27.548 19.2353 27.3516V25.4731H12.8353V28.1855C12.8353 28.301 12.7792 28.4092 12.6849 28.4759C12.5906 28.5424 12.4698 28.5592 12.3608 28.5206C12.1695 28.4527 11.9702 28.4183 11.7686 28.4183C11.2209 28.4183 10.7118 28.6658 10.3718 29.0971C10.2932 29.1968 10.1674 29.2474 10.0416 29.229C9.9159 29.2108 9.80952 29.127 9.7623 29.0091C9.27341 27.7862 8.10698 26.9961 6.79071 26.9961C5.47452 26.9961 4.30808 27.7862 3.81912 29.0091C3.71829 29.2613 3.38008 29.3132 3.20977 29.0971C2.86979 28.6658 2.3607 28.4183 1.81293 28.4183C0.832667 28.4183 0.0351562 29.2158 0.0351562 30.1961C0.0351562 31.1763 0.832667 31.9738 1.81293 31.9738H27.413C28.7854 31.9738 29.9019 30.8573 29.9019 29.485C29.902 28.1126 28.7855 26.9961 27.4131 26.9961Z" fill="#FFC22E"/>\n' +
      '<path d="M12.1246 24.7627V22.3745C12.1246 22.1781 12.2837 22.019 12.4801 22.019C12.6765 22.019 12.8357 22.1781 12.8357 22.3745V24.7627H19.2357V22.3745C19.2357 22.1781 19.3948 22.019 19.5912 22.019C19.7876 22.019 19.9468 22.1781 19.9468 22.3745V24.7627H20.7572C24.5278 20.1147 25.5388 13.6576 23.1302 7.9679H8.94106C6.5279 13.6685 7.55105 20.1241 11.314 24.7627H12.1246ZM16.0357 9.93006C18.9764 9.93006 21.369 12.3226 21.369 15.2634C21.369 18.2042 18.9764 20.5967 16.0357 20.5967C13.0948 20.5967 10.7023 18.2042 10.7023 15.2634C10.7023 12.3226 13.0948 9.93006 16.0357 9.93006Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M30.2575 10.285C30.6502 10.285 30.9686 9.96658 30.9686 9.57385C30.9686 9.18111 30.6502 8.86273 30.2575 8.86273C29.8648 8.86273 29.5464 9.18111 29.5464 9.57385C29.5464 9.96658 29.8648 10.285 30.2575 10.285Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M28.1242 16.6849C28.5169 16.6849 28.8353 16.3665 28.8353 15.9738C28.8353 15.5811 28.5169 15.2627 28.1242 15.2627C27.7315 15.2627 27.4131 15.5811 27.4131 15.9738C27.4131 16.3665 27.7315 16.6849 28.1242 16.6849Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M4.6574 3.17381C5.05013 3.17381 5.36851 2.85543 5.36851 2.4627C5.36851 2.06996 5.05013 1.75159 4.6574 1.75159C4.26466 1.75159 3.94629 2.06996 3.94629 2.4627C3.94629 2.85543 4.26466 3.17381 4.6574 3.17381Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M3.94646 16.6849C4.3392 16.6849 4.65757 16.3665 4.65757 15.9738C4.65757 15.5811 4.3392 15.2627 3.94646 15.2627C3.55373 15.2627 3.23535 15.5811 3.23535 15.9738C3.23535 16.3665 3.55373 16.6849 3.94646 16.6849Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M1.81316 21.6628C2.2059 21.6628 2.52427 21.3444 2.52427 20.9517C2.52427 20.5589 2.2059 20.2405 1.81316 20.2405C1.42043 20.2405 1.10205 20.5589 1.10205 20.9517C1.10205 21.3444 1.42043 21.6628 1.81316 21.6628Z" fill="#FFC22E"/>\n' +
      '</svg>\n',
    month: 'April 2021',
    current: true
  },
  {
    title: 'Community & Ecosystem Evangelization',
    content: 'Engage key space industry players and other beneficiaries supporting the exploration and colonization of the Red Planet.',
    icon: '<svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<g clip-path="url(#clip0)">\n' +
      '<path d="M20.0002 18.1511C19.3949 18.8701 18.7366 19.5548 18.0909 20.2041C17.4085 20.8902 16.4995 21.268 15.531 21.268C14.558 21.268 13.6461 20.8872 12.9629 20.196C12.3239 19.5492 11.6724 18.8675 11.0728 18.1525C8.68295 19.6747 7.21045 22.34 7.21045 25.1815V30.5288H10.6291V27.2495C10.6291 27.0513 10.7896 26.8907 10.9878 26.8907C11.1859 26.8907 11.3466 27.0513 11.3466 27.2495V30.5288H19.7285V27.2495C19.7285 27.0513 19.8891 26.8907 20.0872 26.8907C20.2854 26.8907 20.446 27.0513 20.446 27.2495V30.5288H23.8647V25.1815C23.8647 22.3389 22.3913 19.6731 20.0002 18.1511Z" fill="#FFC22E"/>\n' +
      '<path d="M11.4258 11.9744C11.4001 13.2615 12.4564 14.3167 13.7438 14.2914C13.7562 13.6744 12.7237 11.9525 11.4258 11.9744Z" fill="#FFC22E"/>\n' +
      '<path d="M19.649 11.974C18.3505 11.953 17.3055 13.0111 17.331 14.2911C17.9542 14.3031 18.5424 14.0641 18.982 13.6245C19.426 13.1805 19.6614 12.591 19.649 11.974Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M3.62309 17.2556C3.62309 16.2666 2.81842 15.4619 1.82937 15.4619C0.840308 15.4619 0.0356445 16.2666 0.0356445 17.2556C0.0356445 18.2447 0.840308 19.0494 1.82937 19.0494C2.81842 19.0494 3.62309 18.2447 3.62309 17.2556Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M27.6592 6.13452C26.2745 6.13452 25.1479 7.26105 25.1479 8.64573C25.1479 10.0304 26.2745 11.1569 27.6592 11.1569C29.0438 11.1569 30.1704 10.0304 30.1704 8.64573C30.1704 7.26105 29.0438 6.13452 27.6592 6.13452Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M31.2463 27.3005C31.6426 27.3005 31.9638 26.9792 31.9638 26.583C31.9638 26.1867 31.6426 25.8655 31.2463 25.8655C30.85 25.8655 30.5288 26.1867 30.5288 26.583C30.5288 26.9792 30.85 27.3005 31.2463 27.3005Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M26.2238 17.9731C26.6201 17.9731 26.9413 17.6519 26.9413 17.2556C26.9413 16.8594 26.6201 16.5381 26.2238 16.5381C25.8276 16.5381 25.5063 16.8594 25.5063 17.2556C25.5063 17.6519 25.8276 17.9731 26.2238 17.9731Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M23.3542 2.18833C23.7505 2.18833 24.0717 1.8671 24.0717 1.47085C24.0717 1.07459 23.7505 0.753357 23.3542 0.753357C22.9579 0.753357 22.6367 1.07459 22.6367 1.47085C22.6367 1.8671 22.9579 2.18833 23.3542 2.18833Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M8.28682 1.47087C8.68308 1.47087 9.00431 1.14964 9.00431 0.753377C9.00431 0.357119 8.68308 0.0358887 8.28682 0.0358887C7.89057 0.0358887 7.56934 0.357119 7.56934 0.753377C7.56934 1.14964 7.89057 1.47087 8.28682 1.47087Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M3.26436 8.64573C3.66062 8.64573 3.98185 8.3245 3.98185 7.92824C3.98185 7.53199 3.66062 7.21075 3.26436 7.21075C2.86811 7.21075 2.54688 7.53199 2.54688 7.92824C2.54688 8.3245 2.86811 8.64573 3.26436 8.64573Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M3.26436 25.148C3.66062 25.148 3.98185 24.8268 3.98185 24.4305C3.98185 24.0342 3.66062 23.713 3.26436 23.713C2.86811 23.713 2.54688 24.0342 2.54688 24.4305C2.54688 24.8268 2.86811 25.148 3.26436 25.148Z" fill="#FFC22E"/>\n' +
      '<path d="M15.0003 2.41266C15.285 2.11304 15.7565 2.11419 16.0398 2.41266C16.3712 2.22899 16.5963 1.87591 16.5963 1.47089C16.5963 0.877452 16.1136 0.394653 15.5201 0.394653C14.9266 0.394653 14.4438 0.877452 14.4438 1.47089C14.4438 1.87591 14.6689 2.22899 15.0003 2.41266Z" fill="#FFC22E"/>\n' +
      '<path d="M17.5821 19.6982C19.1102 18.1617 19.5747 17.5306 19.6582 17.4396C20.8723 15.9468 21.8022 14.3217 21.8022 12.6018C21.8022 9.35914 19.305 6.68643 16.1229 6.38379C15.839 6.82304 15.2014 6.82239 14.9179 6.384C11.7548 6.68815 9.27295 9.36022 9.27295 12.6018C9.27295 15.2214 11.4411 17.6349 13.4733 19.6916C14.6031 20.8349 16.4482 20.8383 17.5821 19.6982ZM20.0319 11.2857C20.1899 11.3081 20.3142 11.4323 20.3366 11.5904C20.4706 12.533 20.1617 13.4592 19.4894 14.1314C18.8107 14.8102 17.8734 15.1102 16.9484 14.9786C16.7904 14.9561 16.6661 14.8319 16.6436 14.6739C16.36 12.6784 18.0711 11.007 20.0319 11.2857ZM10.7384 11.5904C10.7609 11.4323 10.8851 11.3081 11.0431 11.2857C13.0155 11.0053 14.7133 12.6902 14.4314 14.6739C14.4089 14.8319 14.2848 14.9561 14.1268 14.9786C13.2011 15.1102 12.2644 14.81 11.5856 14.1314C10.9133 13.4591 10.6046 12.533 10.7384 11.5904Z" fill="#FFC22E"/>\n' +
      '<path d="M15.1611 2.90586V5.99609C15.1611 6.19419 15.3218 6.35483 15.5199 6.35483C15.718 6.35483 15.8786 6.19419 15.8786 5.99609V2.90586C15.8786 2.70776 15.718 2.54712 15.5199 2.54712C15.3219 2.54712 15.1611 2.70776 15.1611 2.90586Z" fill="#FFC22E"/>\n' +
      '</g>\n' +
      '<defs>\n' +
      '<clipPath id="clip0">\n' +
      '<rect width="32" height="30.565" fill="white"/>\n' +
      '</clipPath>\n' +
      '</defs>\n' +
      '</svg>\n',
    month: 'Future'
  },
  {
    title: 'Crossing the Frontier',
    content: 'Distribute pooled $Mars tokens based on ongoing voting proposals to promising projects that are creating transportation systems capable of travel Mars and Earth. ',
    icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M18.3671 18.8803L19.1137 19.378C19.1996 19.4353 19.2996 19.4657 19.4027 19.4657C19.5423 19.4657 19.6733 19.4113 19.7717 19.3129L20.3843 18.7003C20.5594 18.5251 20.5868 18.2484 20.4494 18.0422L19.8171 17.0936C19.7708 17.0242 19.732 16.9505 19.7014 16.8739L19.3054 15.8841C19.1461 15.4855 18.5974 15.4368 18.374 15.8092L17.8396 16.6999C17.7679 16.8193 17.7472 16.9595 17.7809 17.0946L18.1504 18.5729C18.1821 18.699 18.259 18.8082 18.3671 18.8803Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M29.9744 28.0952C29.601 28.0952 29.2974 28.3989 29.2974 28.7722C29.2974 29.1455 29.601 29.4492 29.9744 29.4492C30.3476 29.4492 30.6513 29.1455 30.6513 28.7722C30.6513 28.399 30.3476 28.0952 29.9744 28.0952Z" fill="#FFC22E"/>\n' +
      '<path d="M21.6176 21.9666L19.6365 25.4492C19.4831 26.0781 18.9244 26.4756 18.3245 26.4756C17.5447 26.4756 16.9069 25.7913 16.9915 24.9876L17.2345 22.6795C17.2423 22.6057 17.2017 22.537 17.1336 22.5079L14.894 21.5543C14.7593 21.4969 14.6414 21.405 14.5528 21.2886L13.3648 19.7274C12.5489 18.6553 12.5177 17.1918 13.287 16.0857L13.82 15.3191C13.8888 15.2202 13.8343 15.0846 13.7174 15.0599C13.1635 14.9427 12.8795 14.3257 13.1515 13.8287L13.7684 12.7006C13.9079 12.4457 14.1643 12.2822 14.4542 12.2633L15.4729 12.1966C15.5515 12.1914 15.6165 12.1312 15.6277 12.0533L15.7586 11.138C15.7937 10.8927 15.9327 10.6777 16.1412 10.5451L17.4316 9.58111C16.2235 9.01975 14.8991 8.66826 13.5052 8.57355L13.8414 9.91839C13.9338 10.2885 13.7974 10.6765 13.4939 10.9071L11.4851 12.4342C11.0068 12.798 10.3141 12.6328 10.0521 12.0908C9.9931 11.9689 9.85114 11.9075 9.72197 11.9483L9.38422 12.0549C9.26378 12.0929 9.18498 12.2074 9.19256 12.3334L9.2237 12.8509C9.23928 13.1119 9.14544 13.3706 8.96625 13.561L8.65436 13.8915C8.60439 13.9445 8.57779 14.0139 8.57962 14.0868L8.59309 14.6381C8.60514 15.1321 8.22948 15.5584 7.73792 15.6085L7.08327 15.6752C7.01807 15.6819 6.95735 15.7117 6.9124 15.7588L4.495 18.2937C3.67111 19.1574 4.0245 20.6017 5.17897 20.9696L6.20873 21.298C6.37141 21.35 6.51737 21.4447 6.63084 21.5722L7.89877 22.9984C7.92903 23.0325 7.96769 23.0587 8.01088 23.0742L9.58704 23.6452C10.2582 23.8883 10.4327 24.7562 9.90821 25.24L9.23636 25.8594C9.20272 25.8905 9.17706 25.9299 9.1623 25.9736C9.10875 26.1294 9.47954 25.0992 7.79864 29.7328C9.28944 30.4714 10.9673 30.8876 12.7407 30.8876C18.5777 30.8876 23.3824 26.3872 23.8695 20.6743L21.6176 21.9666ZM9.3264 20.987C8.9525 20.987 8.64941 20.6838 8.64941 20.31C8.64941 19.9361 8.9525 19.633 9.3264 19.633C9.7003 19.633 10.0034 19.9361 10.0034 20.31C10.0034 20.6839 9.7003 20.987 9.3264 20.987ZM10.6804 17.6021C10.3065 17.6021 10.0034 17.2989 10.0034 16.9251C10.0034 16.5512 10.3065 16.2481 10.6804 16.2481C11.0543 16.2481 11.3574 16.5512 11.3574 16.9251C11.3574 17.2989 11.0543 17.6021 10.6804 17.6021ZM14.7423 27.7569C14.3684 27.7569 14.0653 27.4537 14.0653 27.0799C14.0653 26.706 14.3684 26.4029 14.7423 26.4029C15.1162 26.4029 15.4193 26.706 15.4193 27.0799C15.4193 27.4538 15.1162 27.7569 14.7423 27.7569Z" fill="#FFC22E"/>\n' +
      '<path d="M8.77782 25.3617L9.44973 24.7421C9.60097 24.6026 9.55108 24.3518 9.35699 24.2816L7.78062 23.7106C7.63175 23.6565 7.49791 23.5656 7.39324 23.4478L6.12565 22.0219C6.09295 21.9851 6.05057 21.9577 6.00345 21.9426L4.97389 21.6144C4.01365 21.3084 3.36848 20.4255 3.36848 19.4176C3.36848 18.8222 3.59479 18.2569 4.00566 17.8261L6.42292 15.2915C6.57903 15.1276 6.78937 15.0246 7.01515 15.0015L7.66986 14.9348C7.81189 14.9203 7.92042 14.7971 7.91689 14.6544L7.90342 14.1031C7.89726 13.8506 7.98926 13.6103 8.16257 13.4266L8.47433 13.0963C8.52598 13.0414 8.55313 12.9666 8.54859 12.8911L8.51752 12.3739C8.49112 11.9374 8.76408 11.5406 9.18124 11.4089L9.51892 11.3024C9.96634 11.1612 10.458 11.3733 10.6623 11.7958C10.7376 11.9518 10.937 12.0006 11.0761 11.895L13.085 10.3678C13.1727 10.3013 13.212 10.1891 13.1853 10.0822L12.8016 8.54738C6.53882 8.51664 1.5708 13.6102 1.5708 19.717C1.5708 23.8595 3.83743 27.4824 7.19556 29.4109L8.523 25.7518C8.57425 25.6032 8.66233 25.4682 8.77782 25.3617Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M3.9105 3.0461C4.47044 3.0461 4.92599 2.59056 4.92599 2.03062C4.92599 1.47068 4.47044 1.01514 3.9105 1.01514C3.35057 1.01514 2.89502 1.47068 2.89502 2.03062C2.89502 2.59056 3.35057 3.0461 3.9105 3.0461Z" fill="#FFC22E"/>\n' +
      '<path d="M17.6647 25.0572C17.6418 25.2739 17.7263 25.4886 17.8906 25.6314C18.2781 25.9688 18.8846 25.7616 18.9852 25.2583C18.9922 25.2228 19.005 25.1887 19.0229 25.1572L21.0748 21.5502C21.1046 21.4977 21.1481 21.454 21.2005 21.4241L23.9088 19.8698C23.964 15.587 21.6084 11.8474 18.1059 9.9212C17.0404 10.7167 16.5302 11.0994 16.5076 11.1132C16.4646 11.1392 16.4359 11.1827 16.4287 11.2325L16.2978 12.148C16.2415 12.5411 15.9131 12.8451 15.5169 12.8709L14.4983 12.9376C14.4407 12.9414 14.3899 12.9737 14.3622 13.0243L13.7454 14.1523C13.7102 14.2165 13.727 14.274 13.7401 14.3025C13.7532 14.331 13.7859 14.3812 13.8575 14.3964C14.135 14.4551 14.3631 14.6476 14.4676 14.9113C14.572 15.175 14.5377 15.4715 14.3757 15.7044L13.8428 16.4709C13.2418 17.3352 13.2661 18.4786 13.9036 19.3161L15.0916 20.8773C15.1092 20.9005 15.1326 20.9187 15.1593 20.9301L17.3989 21.8837C17.7426 22.03 17.9472 22.3779 17.9078 22.7492L17.6647 25.0572ZM17.4947 18.7364L17.1252 17.2581C17.0476 16.9477 17.0954 16.6254 17.2602 16.351L17.7945 15.4603C18.3065 14.6073 19.5688 14.7158 19.935 15.6321L20.331 16.6219C20.3659 16.709 20.3523 16.6673 21.0137 17.6661C21.3295 18.1397 21.2666 18.7757 20.864 19.1784L20.2514 19.791C20.0251 20.0173 19.724 20.142 19.4037 20.142C19.4037 20.142 19.4037 20.142 19.4036 20.142C19.1665 20.1419 18.9367 20.0724 18.7392 19.9406L17.9927 19.4429C17.7442 19.2774 17.5672 19.0264 17.4947 18.7364Z" fill="#FFC22E"/>\n' +
      '<path d="M24.5336 8.0553C25.3103 8.74325 26.3305 9.1621 27.4473 9.1621C29.1509 9.1621 30.6305 8.18826 31.3613 6.76861C30.7655 7.00698 30.1274 7.13114 29.4782 7.13114C26.4856 7.13114 24.1371 4.54416 24.4248 1.56805C22.6843 3.21605 22.5789 5.93971 24.1872 7.71409C24.422 7.93831 24.5201 8.04155 24.5336 8.0553Z" fill="#FFC22E"/>\n' +
      '<path d="M31.8326 4.41216C29.3617 4.57572 27.1012 2.90647 26.5543 0.452454C26.0751 0.551633 25.6247 0.729613 25.2161 0.971095C24.5053 3.77254 26.6335 6.4541 29.4784 6.4541C30.2671 6.4541 31.0367 6.24308 31.7129 5.84338C31.8375 5.35209 31.8698 4.88206 31.8326 4.41216Z" fill="#FFC22E"/>\n' +
      '<path d="M31.7262 3.73809C31.2444 1.72317 29.3837 0.259991 27.2285 0.366211C27.6944 2.31587 29.6018 3.84864 31.7262 3.73809Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M30.9905 25.0483C31.3644 25.0483 31.6675 24.7452 31.6675 24.3713C31.6675 23.9974 31.3644 23.6943 30.9905 23.6943C30.6166 23.6943 30.3135 23.9974 30.3135 24.3713C30.3135 24.7452 30.6166 25.0483 30.9905 25.0483Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M30.3137 12.186C30.6876 12.186 30.9907 11.8829 30.9907 11.509C30.9907 11.1351 30.6876 10.832 30.3137 10.832C29.9398 10.832 29.6367 11.1351 29.6367 11.509C29.6367 11.8829 29.9398 12.186 30.3137 12.186Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M20.8352 1.35398C21.2091 1.35398 21.5122 1.05088 21.5122 0.676989C21.5122 0.303098 21.2091 0 20.8352 0C20.4613 0 20.1582 0.303098 20.1582 0.676989C20.1582 1.05088 20.4613 1.35398 20.8352 1.35398Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M7.29613 2.03073C7.67002 2.03073 7.97312 1.72764 7.97312 1.35375C7.97312 0.979856 7.67002 0.676758 7.29613 0.676758C6.92224 0.676758 6.61914 0.979856 6.61914 1.35375C6.61914 1.72764 6.92224 2.03073 7.29613 2.03073Z" fill="#FFC22E"/>\n' +
      '<path opacity="0.5" d="M11.8764 3.651C7.41942 3.651 3.23651 5.39411 0.0981241 8.55924C-0.0334825 8.692 -0.0326025 8.90633 0.100155 9.03794C0.232913 9.16961 0.447247 9.16873 0.578854 9.03591C3.58915 5.99995 7.6014 4.32799 11.8764 4.32799C20.6488 4.32799 27.7857 11.4648 27.7857 20.2372C27.7857 24.4534 26.1531 28.4263 23.1886 31.4238C23.0571 31.5567 23.0583 31.771 23.1912 31.9024C23.3243 32.0339 23.5383 32.0327 23.6699 31.8998C26.7605 28.7747 28.4627 24.6329 28.4627 20.2372C28.4626 11.0706 21.0443 3.651 11.8764 3.651Z" fill="#FFC22E"/>\n' +
      '</svg>\n',
    month: 'Future'
  },
  {
    title: 'Establishing the Mars Ecosystem',
    content: 'Mars Economy fuels the currency & financial ecosystem of Mars as humanity progresses towards establishing the future as a multi-planetary species.',
    icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<g clip-path="url(#clip0)">\n' +
      '<path d="M6.19935 25.3038C7.81119 25.3038 9.12245 23.9924 9.12245 22.3806C9.12245 20.9922 8.1298 19.7922 6.78602 19.5177C5.47351 20.7678 4.44002 22.3078 3.78906 24.0342C4.33556 24.8322 5.22391 25.3038 6.19935 25.3038Z" fill="#FFC22E"/>\n' +
      '<path d="M24.3491 25.035C24.3491 26.6469 25.6605 27.9582 27.2722 27.9582C27.2794 27.9582 27.2867 27.9575 27.2938 27.9575C27.2348 25.9873 26.7034 24.1338 25.81 22.5059C24.9136 23.0243 24.3491 23.9835 24.3491 25.035Z" fill="#FFC22E"/>\n' +
      '<path d="M27.9367 9.35669H23.9695V13.4517C23.9695 13.6549 23.8048 13.8195 23.6017 13.8195H22.6943V14.9965H27.9367L25.8646 12.4064C25.7571 12.272 25.7571 12.0811 25.8646 11.9468L27.9367 9.35669Z" fill="#FFC22E"/>\n' +
      '<g opacity="0.3">\n' +
      '<path d="M16.7282 23.4255C16.2051 23.4255 15.7793 23.851 15.7793 24.3741C15.7793 24.8971 16.205 25.3228 16.7282 25.3228C17.2514 25.3228 17.6771 24.8972 17.6771 24.3741C17.677 23.851 17.2514 23.4255 16.7282 23.4255Z" fill="#FFC22E"/>\n' +
      '<path d="M4.41427 13.977C5.42834 13.977 6.25335 13.1519 6.25335 12.1379C6.25335 11.1238 5.42834 10.2988 4.41427 10.2988C3.4002 10.2988 2.5752 11.1238 2.5752 12.1379C2.5752 13.1519 3.40013 13.977 4.41427 13.977Z" fill="#FFC22E"/>\n' +
      '<path d="M30.5279 20.5979C30.5279 20.1923 30.1979 19.8622 29.7923 19.8622C29.3866 19.8622 29.0566 20.1923 29.0566 20.5979C29.0566 21.0035 29.3866 21.3335 29.7923 21.3335C30.1979 21.3335 30.5279 21.0035 30.5279 20.5979Z" fill="#FFC22E"/>\n' +
      '<path d="M31.2649 10.6668C31.6712 10.6668 32.0006 10.3374 32.0006 9.93113C32.0006 9.52485 31.6712 9.1955 31.2649 9.1955C30.8586 9.1955 30.5293 9.52485 30.5293 9.93113C30.5293 10.3374 30.8586 10.6668 31.2649 10.6668Z" fill="#FFC22E"/>\n' +
      '<path d="M30.8958 28.322C31.3021 28.322 31.6314 27.9927 31.6314 27.5864C31.6314 27.1801 31.3021 26.8508 30.8958 26.8508C30.4895 26.8508 30.1602 27.1801 30.1602 27.5864C30.1602 27.9927 30.4895 28.322 30.8958 28.322Z" fill="#FFC22E"/>\n' +
      '<path d="M0.73563 18.7588C1.14191 18.7588 1.47126 18.4295 1.47126 18.0232C1.47126 17.6169 1.14191 17.2875 0.73563 17.2875C0.329353 17.2875 0 17.6169 0 18.0232C0 18.4295 0.329353 18.7588 0.73563 18.7588Z" fill="#FFC22E"/>\n' +
      '<path d="M11.7697 12.1378C12.176 12.1378 12.5053 11.8085 12.5053 11.4023C12.5053 10.996 12.176 10.6667 11.7697 10.6667C11.3635 10.6667 11.0342 10.996 11.0342 11.4023C11.0342 11.8085 11.3635 12.1378 11.7697 12.1378Z" fill="#FFC22E"/>\n' +
      '<path d="M5.88504 31.9998C6.29132 31.9998 6.62067 31.6704 6.62067 31.2641C6.62067 30.8579 6.29132 30.5285 5.88504 30.5285C5.47877 30.5285 5.14941 30.8579 5.14941 31.2641C5.14941 31.6704 5.47877 31.9998 5.88504 31.9998Z" fill="#FFC22E"/>\n' +
      '<path d="M28.6897 5.51711C29.096 5.51711 29.4254 5.18776 29.4254 4.78148C29.4254 4.37519 29.096 4.04584 28.6897 4.04584C28.2835 4.04584 27.9541 4.37519 27.9541 4.78148C27.9541 5.18776 28.2835 5.51711 28.6897 5.51711Z" fill="#FFC22E"/>\n' +
      '<path d="M5.14969 1.83914C5.55597 1.83914 5.88532 1.50978 5.88532 1.1035C5.88532 0.697215 5.55597 0.367859 5.14969 0.367859C4.74342 0.367859 4.41406 0.697215 4.41406 1.1035C4.41406 1.50978 4.74342 1.83914 5.14969 1.83914Z" fill="#FFC22E"/>\n' +
      '</g>\n' +
      '<path d="M16.966 5.75016C17.0945 5.90737 17.3264 5.93054 17.4835 5.80195L23.7773 0.652481C23.9345 0.523818 23.9577 0.292165 23.829 0.134886C23.7004 -0.0223935 23.4686 -0.045566 23.3115 0.0831707L17.0177 5.23264C16.8605 5.36123 16.8373 5.59295 16.966 5.75016Z" fill="#FFC22E"/>\n' +
      '<path d="M7.80729 8.42559C7.87997 8.51446 7.98561 8.56051 8.0922 8.56051C8.17408 8.56051 8.25654 8.53329 8.32488 8.47731L17.8881 0.652508C18.0453 0.52384 18.0684 0.292178 17.9398 0.134892C17.8112 -0.0223944 17.5795 -0.045568 17.4223 0.0831742L7.85908 7.90797C7.7018 8.03664 7.67863 8.26838 7.80729 8.42559Z" fill="#FFC22E"/>\n' +
      '<path d="M3.91079 7.29546L9.30546 2.88194C9.46267 2.75328 9.48591 2.52164 9.35725 2.36438C9.22866 2.20718 8.99687 2.18401 8.83966 2.31266L3.44499 6.72619C3.28779 6.85477 3.26454 7.08648 3.39321 7.24367C3.52165 7.40065 3.75344 7.42426 3.91079 7.29546Z" fill="#FFC22E"/>\n' +
      '<path d="M23.6001 25.0315C23.6001 23.717 24.3047 22.518 25.424 21.8686C24.1036 19.7736 22.16 18.1101 19.8562 17.1367V18.9112C19.8562 19.3169 19.5262 19.6469 19.1206 19.6469C18.7149 19.6469 18.3849 19.3169 18.3849 18.9112V16.6242C14.6763 15.5965 10.5773 16.3655 7.43559 18.9574C8.8555 19.4712 9.85544 20.84 9.85544 22.3986C9.85544 24.4161 8.2141 26.0575 6.19664 26.0575C5.15476 26.0575 4.19263 25.6274 3.50776 24.881C3.21778 25.8601 3.04748 26.8903 3.01562 27.9546H25.0611C24.1746 27.2863 23.6001 26.2247 23.6001 25.0315ZM12.4998 25.3799C12.0935 25.3799 11.7642 25.0504 11.7642 24.6442C11.7642 24.238 12.0935 23.9086 12.4998 23.9086C12.9061 23.9086 13.2354 24.238 13.2354 24.6442C13.2354 25.0504 12.9061 25.3799 12.4998 25.3799ZM13.9711 19.4948C13.5648 19.4948 13.2354 19.1653 13.2354 18.7591C13.2354 18.3529 13.5648 18.0235 13.9711 18.0235C14.3774 18.0235 14.7067 18.3529 14.7067 18.7591C14.7067 19.1653 14.3774 19.4948 13.9711 19.4948ZM16.7278 26.0575C15.7992 26.0575 15.0435 25.3019 15.0435 24.3731C15.0435 23.4445 15.7992 22.6889 16.7278 22.6889C17.6565 22.6889 18.412 23.4445 18.412 24.3731C18.4119 25.3019 17.6565 26.0575 16.7278 26.0575ZM21.3274 23.9086C20.9211 23.9086 20.5917 23.5792 20.5917 23.1729C20.5917 22.7667 20.9211 22.4373 21.3274 22.4373C21.7336 22.4373 22.063 22.7667 22.063 23.1729C22.063 23.5792 21.7336 23.9086 21.3274 23.9086Z" fill="#FFC22E"/>\n' +
      '<path d="M23.2207 8.09198H19.8613V13.0943H23.2207V8.09198Z" fill="#FFC22E"/>\n' +
      '<path d="M18.7588 7.72414V18.9108C18.7588 19.114 18.9234 19.2786 19.1266 19.2786C19.3297 19.2786 19.4944 19.114 19.4944 18.9108V7.72414C19.4944 7.52103 19.3297 7.35632 19.1266 7.35632C18.9234 7.35632 18.7588 7.52103 18.7588 7.72414Z" fill="#FFC22E"/>\n' +
      '</g>\n' +
      '<defs>\n' +
      '<clipPath id="clip0">\n' +
      '<rect width="32.0002" height="32" fill="white"/>\n' +
      '</clipPath>\n' +
      '</defs>\n' +
      '</svg>\n',
    month: 'Future'
  }
]
