export default function Address() {
  return (
    <section className="bg-grad border-current rounded-[20px] p-[40px] my-[60px]">
      <div className="title mb-[20px]">
        <h3 className="text-[25px] leading-[26px]">Ema Trapikienė</h3>
      </div>
      <div className="content flex flex-col md:flex-row  items-center gap-[40px]">
        <div className="single flex flex-col md:flex-row items-center gap-[10px]">
          <div className="logo">
            <svg
              width="15"
              height="20"
              viewBox="0 0 15 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 7.511C10.625 9.27139 9.21875 10.6406 7.5 10.6406C5.74219 10.6406 4.375 9.27139 4.375 7.511C4.375 5.78973 5.74219 4.38142 7.5 4.38142C9.21875 4.38142 10.625 5.78973 10.625 7.511ZM7.5 9.38875C8.51562 9.38875 9.375 8.56724 9.375 7.511C9.375 6.49389 8.51562 5.63325 7.5 5.63325C6.44531 5.63325 5.625 6.49389 5.625 7.511C5.625 8.56724 6.44531 9.38875 7.5 9.38875ZM15 7.511C15 10.9535 10.4297 17.0171 8.39844 19.5599C7.92969 20.1467 7.03125 20.1467 6.5625 19.5599C4.53125 17.0171 0 10.9535 0 7.511C0 3.3643 3.32031 0 7.5 0C11.6406 0 15 3.3643 15 7.511ZM7.5 1.25183C4.02344 1.25183 1.25 4.06846 1.25 7.511C1.25 8.13692 1.44531 8.95844 1.875 10.0147C2.30469 11.0318 2.89063 12.1271 3.59375 13.2225C4.92188 15.3741 6.48438 17.4474 7.5 18.6993C8.47656 17.4474 10.0391 15.3741 11.3672 13.2225C12.0703 12.1271 12.6563 11.0318 13.0859 10.0147C13.5156 8.95844 13.75 8.13692 13.75 7.511C13.75 4.06846 10.9375 1.25183 7.5 1.25183Z"
                fill="#2E3192"
              />
            </svg>
          </div>
          <div className="text">
            <p className="font-[500]">
              Bažnyčios g. 18, LT-30185 <br />
              Ceikinių k., Ignalinos raj.
            </p>
          </div>
        </div>
        <div className="single flex flex-col md:flex-row items-center gap-[10px]">
          <div className="logo">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0703 10.9637C16.7344 11.2625 17.0996 11.993 16.9336 12.6902L16.2363 15.8113C16.0703 16.5086 15.4727 16.9734 14.7422 16.9734C6.60742 16.9734 0 10.366 0 2.23125C0 1.50078 0.464844 0.903127 1.16211 0.770314L4.2832 0.0398454C4.98047 -0.12617 5.71094 0.239064 6.00977 0.903127L7.4375 4.28985C7.70312 4.8875 7.53711 5.61797 7.03906 6.04961L5.67773 7.14531C6.64062 8.87188 8.10156 10.3328 9.82812 11.2957L10.957 9.96758C11.3555 9.43633 12.0859 9.27031 12.6836 9.50274L16.0703 10.9637ZM15.1738 15.5789L15.9043 12.4578C15.9707 12.2254 15.8379 12.0262 15.6387 11.9266L12.2852 10.4988C12.0859 10.4324 11.8867 10.4656 11.7539 10.6316L10.3926 12.2918C10.2266 12.491 9.96094 12.5574 9.76172 12.4246C7.50391 11.3289 5.64453 9.46953 4.54883 7.24492C4.41602 7.0125 4.48242 6.74688 4.68164 6.58086L6.3418 5.21953C6.50781 5.08672 6.54102 4.8875 6.47461 4.68828L5.04688 1.33477C4.94727 1.16875 4.78125 1.03594 4.61523 1.03594C4.58203 1.03594 4.54883 1.06914 4.51562 1.06914L1.39453 1.79961C1.19531 1.83281 1.0625 1.99883 1.0625 2.23125C1.0625 9.76836 7.20508 15.9441 14.7422 15.9441C14.9746 15.9441 15.1406 15.7781 15.1738 15.5789Z"
                fill="#2E3192"
              />
            </svg>
          </div>
          <div className="text">
            <p className="font-[500]">+370 609 83 356</p>
          </div>
        </div>
        <div className="single flex flex-col md:flex-row items-center gap-[10px]">
          <div className="logo">
            <svg
              width="17"
              height="13"
              viewBox="0 0 17 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.875 0C16.0371 0 17 0.962891 17 2.125V10.625C17 11.8203 16.0371 12.75 14.875 12.75H2.125C0.929688 12.75 0 11.8203 0 10.625V2.125C0 0.962891 0.929688 0 2.125 0H14.875ZM2.125 1.0625C1.52734 1.0625 1.0625 1.56055 1.0625 2.125V3.32031L7.53711 8.20117C8.10156 8.63281 8.86523 8.63281 9.42969 8.20117L15.9375 3.35352V2.125C15.9375 1.56055 15.4395 1.0625 14.875 1.0625H2.125ZM15.9375 10.625V4.64844L10.0938 9.03125C9.5957 9.39648 9.03125 9.5957 8.5 9.5957C7.93555 9.5957 7.37109 9.39648 6.90625 9.03125L1.0625 4.64844V10.625C1.0625 11.2227 1.52734 11.6875 2.125 11.6875H14.875C15.4395 11.6875 15.9375 11.2227 15.9375 10.625Z"
                fill="#2E3192"
              />
            </svg>
          </div>
          <div className="text">
            <p className="font-[500]">ema018@gmail.com</p>
          </div>
        </div>
        <div className="single flex flex-col md:flex-row items-center gap-[10px]">
          <div className="logo">
            <svg
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.45074 7.04288H1.85464C1.35475 7.04288 0.95 7.45794 0.95 7.96602V10.752C0.95 11.2599 1.35474 11.6752 1.85464 11.6752H3.45074V18.1269C3.45074 18.6349 3.85549 19.05 4.35538 19.05H7.17684C7.67673 19.05 8.08162 18.6349 8.08162 18.1269V11.675H10.0436C10.5435 11.675 10.9482 11.26 10.9482 10.7522C10.9482 10.7522 10.9482 10.7522 10.9482 10.7522L10.9493 7.96618V7.96616C10.9493 7.63222 10.7714 7.32285 10.4844 7.15905L10.4844 7.15904C10.3509 7.08287 10.196 7.04274 10.0368 7.04274H8.08162V5.99054C8.08162 5.81282 8.09332 5.69413 8.10918 5.61541C8.12522 5.53581 8.14464 5.50156 8.15632 5.48801L8.11845 5.45537C8.14251 5.42763 8.25502 5.33713 8.69686 5.33713L3.45074 7.04288ZM3.45074 7.04288V5.69775C3.45074 4.30415 3.87923 3.11402 4.69396 2.25995C5.51257 1.40178 6.65534 0.95 7.99505 0.95H7.99514L10.1469 0.953571L10.1468 1.00357L10.1469 0.953571C10.646 0.954445 11.05 1.36949 11.05 1.87671V4.46344C11.05 4.97149 10.6454 5.38657 10.1456 5.38658L3.45074 7.04288ZM6.9486 17.8948V11.1527C6.9486 10.8046 7.22606 10.5198 7.56921 10.5198H9.81538L9.81629 8.19812H7.56908C7.22591 8.19812 6.9486 7.91323 6.9486 7.56516V5.99054C6.9486 5.5774 6.98885 5.09169 7.30637 4.72435M6.9486 17.8948L7.34419 4.75705M6.9486 17.8948H4.58362M6.9486 17.8948H4.58362M7.30637 4.72435L7.34419 4.75705M7.30637 4.72435C7.30636 4.72436 7.30636 4.72436 7.30636 4.72436L7.34419 4.75705M7.30637 4.72435C7.69032 4.27994 8.29185 4.23189 8.69657 4.23189L8.69659 4.28189M7.34419 4.75705C7.71223 4.33105 8.29225 4.28189 8.69659 4.28189M8.69659 4.28189V4.23189M8.69659 4.28189V4.23189M8.69659 4.23189L9.91712 4.23136V2.10845L7.99425 2.10524C7.99422 2.10524 7.99419 2.10524 7.99416 2.10524C6.93828 2.10525 6.08715 2.45024 5.49981 3.06842C4.91218 3.68691 4.58362 4.58416 4.58362 5.69775V7.56516C4.58362 7.91309 4.30632 8.19812 3.96314 8.19812H2.08288V10.5198H3.96314C4.30631 10.5198 4.58362 10.8047 4.58362 11.1527V17.8948M8.69659 4.23189L4.58362 17.8948M9.86631 8.14812H9.81631L9.86629 8.19812L9.86631 8.14812Z"
                fill="#2E3192"
                stroke="#2E3192"
                stroke-width="0.1"
              />
            </svg>
          </div>
          <div className="text">
            <p className="font-[500]">Sekite mus</p>
          </div>
        </div>
      </div>
    </section>
  );
}
