import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/ProductReel'
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import {
  PackageSearch,
  ShieldCheck,
  Truck
} from 'lucide-react'
import Link from 'next/link'

const perks = [
  {
    name: 'Curated Selection',
    Icon: PackageSearch,
    description:
      'Carefully curated selection of the most used and essential items.',
  },
  {
    name: 'Trusted Brands',
    Icon: ShieldCheck,
    description:
      'Partners of most reputable brands in India, assuring reliability and safety of the products.',
  },
  {
    name: 'Fast and Reliable Delivery',
    Icon: Truck,
    description:
      "Commited to timely and reliable delivery services. Next-day delivery available.^",
  },
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
          Royal Rations Pet Supply{' '}
            <span className='text-amber-600'>
              Your Pet&apos;s Perfect Pantry
            </span>
            !
        </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
          Welcome, the pet lover&apos;s haven in Jaipur! Unleash joy with our carefully curated selection of essentials, ensuring tails wag and whiskers purr. Dive into a world where quality meets convenience. Happy pets, happy you!
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link
              href='/products'
              className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant='ghost'>
              Our quality promise &rarr;
            </Button>
          </div>
        </div>

        <ProductReel
          query={{ sort: 'desc', limit: 4 }}
          href='/products?sort=recent'
          title='Brand new'
        />
      </MaxWidthWrapper>

      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-amber-100 text-amber-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}