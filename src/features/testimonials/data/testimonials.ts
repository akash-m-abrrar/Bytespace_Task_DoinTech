import type { Testimonial } from '../types'

export const TESTIMONIALS_HEADING =
  'Discover What Our Community Is Saying'

export const TESTIMONIALS_DESCRIPTION =
  'At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative power of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.'

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: 'sarah-m',
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: '/Doin_Assets_png/Ellipse.png',
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 'james-l',
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: '/Doin_Assets_png/Ellipse (1).png',
    quote:
      '"I’ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 'alex-b',
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: '/Doin_Assets_png/Ellipse (2).png',
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
]
