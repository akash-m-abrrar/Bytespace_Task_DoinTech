import { Star, BarChart2 } from 'lucide-react'
import type { CourseCardProps } from '../types'
import { cn } from '@/lib/utils'

export function CourseCard({ course, className }: CourseCardProps) {
  const avatars = course.studentAvatars ?? [
    '/Doin_Assets_png/Ellipse.png',
    '/Doin_Assets_png/Ellipse (1).png',
    '/Doin_Assets_png/Ellipse (2).png',
    '/Doin_Assets_png/Ellipse 7.png',
  ]

  return (
    <article
      className={cn(
        'bg-white rounded-[24px] border border-gray-200/90 p-3 sm:p-3.5 md:p-4',
        'flex flex-col justify-between h-full transition-all duration-200',
        'hover:shadow-md hover:border-gray-300',
        className
      )}
    >
      <div>
        {/* Course Thumbnail */}
        <div className="relative w-full aspect-[16/10] rounded-[18px] overflow-hidden bg-gray-100">
          <img
            src={course.image}
            alt={course.title}
            loading="lazy"
            className="w-full h-full object-cover select-none"
          />
          {/* Accessible course metadata for screen readers */}
          <div className="sr-only">
            <span>{course.lessons} Lessons</span>
            <span>{course.duration}</span>
            <span>{course.comments} Comments</span>
          </div>
        </div>

        {/* Content Details */}
        <div className="pt-3.5 sm:pt-4 px-1">
          {/* Title & Rating */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-gray-900 text-base sm:text-lg lg:text-[19px] leading-snug line-clamp-1">
              {course.title}
            </h3>
            <div className="flex items-center gap-1 shrink-0 mt-0.5">
              <span className="text-sm sm:text-base font-semibold text-gray-800">
                {course.rating.toFixed(1)}
              </span>
              <Star
                className="w-4 h-4 fill-[#d2f801] text-[#d2f801]"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Instructor */}
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            by{' '}
            <span className="text-[#3b59ff] hover:underline cursor-pointer font-medium">
              {course.instructor}
            </span>
          </p>

          {/* Level and Students Cluster */}
          <div className="mt-4 flex items-center justify-between gap-2">
            {/* Level Pill */}
            <div className="inline-flex items-center gap-1.5 bg-[#F5F5F6] text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium">
              <BarChart2 className="w-3.5 h-3.5 text-gray-600" aria-hidden="true" />
              <span>{course.level}</span>
            </div>

            {/* Avatars Cluster */}
            <div className="flex items-center -space-x-2 shrink-0">
              {avatars.slice(0, 4).map((avatarSrc, idx) => (
                <img
                  key={idx}
                  src={avatarSrc}
                  alt="Student avatar"
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover select-none"
                />
              ))}
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black text-white text-[10px] sm:text-xs font-semibold flex items-center justify-center border-2 border-white select-none">
                {course.additionalStudents ?? `${course.students}+`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Price Footer */}
      <div className="mt-4 sm:mt-5 pt-1 px-1">
        <p className="text-gray-900">
          <span className="text-xl sm:text-2xl font-bold text-[#003be2]">
            ${course.price}
          </span>
          <span className="text-xs sm:text-sm text-gray-500 font-normal">
            /{course.period ?? 'lifetime'}
          </span>
        </p>
      </div>
    </article>
  )
}
