import { Icon } from '@iconify-icon/solid'
import createEmblaCarousel from 'embla-carousel-solid'
import { createEffect, createSignal } from 'solid-js'
import type { EmblaCarouselType } from 'embla-carousel'
import { Button } from './ui/button'
import { cn } from '@/libs/cn'

export const Hero = () => {
	const [emblaRef, emblaApi] = createEmblaCarousel(() => ({
		loop: true,
	}))
	const [selectedIndex, setSelectedIndex] = createSignal(0)

	const logSlidesInView = (emblaApi: EmblaCarouselType) =>
		setSelectedIndex(emblaApi.selectedScrollSnap())

	createEffect(() => {
		const api = emblaApi()
		if (api) api.on('select', logSlidesInView)
	})

	return (
		<section class='embla overflow-hidden' ref={emblaRef}>
			<div class='embla__container flex'>
				<div class='embla__slide flex-[0_0_100%] min-w-0 relative h-[800px] before:-z-10 before:inset-0 before:brightness-75 before:absolute before:bg-[url(/images/hero.jpg)] before:bg-no-repeat before:bg-cover before:bg-center text-white content-center'>
					<div class='container'>
						<p class='mb-2 text-4xl accent-title'>Starting At Only $0.5</p>
						<h1 class='text-7xl max-w-2xl font-semibold mb-5'>
							<span class='text-primary'>Summer</span> Special Collection
						</h1>
						<p class='mb-11 font-medium'>
							Brand day flat 20% off and free shipping
						</p>
						<div class='flex items-center gap-3'>
							<Button class='font-bold text-lg' size='lg'>
								Shop Now
							</Button>
							<Icon class='text-primary' width={28} icon='lucide:phone-call' />
							<a class='font-semibold'>+(00)-000-000-000</a>
						</div>
					</div>
				</div>
				<div class='embla__slide flex-[0_0_100%] min-w-0 relative h-[800px] before:-z-10 before:inset-0 before:brightness-75 before:absolute before:bg-[url(/images/hero-2.jpg)] before:bg-no-repeat before:bg-cover before:bg-center text-white content-center'>
					<div class='container'>
						<p class='mb-2 text-4xl accent-title'>Starting At Only $0.5</p>
						<h1 class='text-7xl max-w-2xl font-semibold mb-5'>
							<span class='text-primary'>Summer</span> Special Collection
						</h1>
						<p class='mb-11 font-medium'>
							Brand day flat 20% off and free shipping
						</p>
						<div class='flex items-center gap-3'>
							<Button class='font-bold text-lg' size='lg'>
								Shop Now
							</Button>
							<Icon class='text-primary' width={28} icon='lucide:phone-call' />
							<a class='font-semibold'>+(00)-000-000-000</a>
						</div>
					</div>
				</div>
			</div>

			<div class='absolute left-1/3 bottom-[100px]'>
				<div class='flex gap-3'>
					{emblaApi()
						?.scrollSnapList()
						.map((_, index) => (
							<button
								onClick={() => {
									emblaApi()?.scrollTo(index)
									setSelectedIndex(index)
								}}
								class={cn('bg-white/50 rounded-full size-3', {
									'bg-primary': index === selectedIndex(),
								})}
							/>
						))}
				</div>
			</div>
		</section>
	)
}
