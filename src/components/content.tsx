import {
  Route,
  Cloud,
  LockKeyhole,
  Church,
  PartyPopper,
  CalendarCheck2,
  Gem,
} from "lucide-react";
import Link from "next/link";

export default function ContentSection() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base leading-7 text-primary font-text1">
            Come along
          </h2>
          <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-text3">
            Everything you need to be there!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {/* -- dates and times */}
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <CalendarCheck2
                  aria-hidden="true"
                  className="h-5 w-5 flex-none text-primary"
                />
                Date and times
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  18th October, 2024 <br />
                  Church - 6:00am
                  <br />
                  Reception - 6:00pm.
                </p>
                <p className="mt-6">
                  <Link
                    href="/"
                    className="text-sm font-semibold leading-6 text-muted-foreground"
                  >
                    Remind me <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </div>

            {/* -- church address */}
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Church
                  aria-hidden="true"
                  className="h-5 w-5 flex-none text-primary"
                />
                Church Address
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  SHEKINAH SHUR MINISTRIES. <br />4 Mill Rd, Newthorpe,
                  Nothingham. <br />
                  NG16 3PR.
                </p>
                <p className="mt-6">
                  <Link
                    href="https://maps.app.goo.gl/Wbnoqy9RFxCvegfv6"
                    className="text-sm font-semibold leading-6 text-muted-foreground"
                    target="_blank"
                  >
                    View in maps <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </div>

            {/* -- Reception address */}
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Gem
                  aria-hidden="true"
                  className="h-5 w-5 flex-none text-primary"
                />
                Reception Address
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Cleaver and Wake. <br />
                  1a The Great Northern Cl, Nottingham.
                  <br />
                  NG2 3JL.
                </p>
                <p className="mt-6">
                  <Link
                    href="https://maps.app.goo.gl/jnTkxFZEhMWiwmk68"
                    className="text-sm font-semibold leading-6 text-muted-foreground"
                    target="_blank"
                  >
                    View in maps <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
