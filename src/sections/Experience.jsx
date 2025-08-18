import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BriefcaseIcon, MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline'
import { experience } from '../data/portfolio'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  const ExperienceCard = ({ exp, index }) => {
    const isEven = index % 2 === 0

    return (
      <motion.div
        variants={itemVariants}
        className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
      >
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>
        
        {/* Timeline Dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 hidden md:block z-10"></div>

        {/* Content */}
        <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ y: -5 }}
          >
            {/* Company & Position */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                  {exp.position}
                </h3>
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {exp.company}
                </h4>
              </div>
              <BriefcaseIcon className="w-8 h-8 text-gray-400 flex-shrink-0" />
            </div>

            {/* Duration & Location */}
            <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <CalendarIcon className="w-4 h-4" />
                <span>{exp.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPinIcon className="w-4 h-4" />
                <span>{exp.location}</span>
              </div>
            </div>

            {/* Description */}
            <ul className="space-y-2 mb-4">
              {exp.description.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Spacer for the other side */}
        <div className="hidden md:block w-5/12"></div>
      </motion.div>
    )
  }

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey and the experiences that have shaped my skills and expertise.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-8"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative space-y-12">
            {experience.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Let's Work Together
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
