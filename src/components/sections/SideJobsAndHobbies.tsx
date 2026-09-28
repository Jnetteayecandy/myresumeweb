import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  Flame, 
  Waves, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  Play, 
  Image as ImageIcon,
  Globe2,
  Quote,
  MapPin,
  Calendar
} from 'lucide-react';
import { sideJobsAndHobbies, internationalExperiences } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

// Responsive image component that displays real uploaded photo with clean styling and fallback handling
const CardImage: React.FC<{
  src: string;
  alt: string;
  backupSrc?: string;
}> = ({ src, alt, backupSrc }) => {
  return (
    <div className="relative w-full h-44 sm:h-52 mb-3.5 sm:mb-4 overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-slate-100 group/img">
      <img
        src={src}
        alt={alt}
        onError={(e) => {
          if (backupSrc && !e.currentTarget.src.includes(backupSrc)) {
            e.currentTarget.src = backupSrc;
          }
        }}
        className="w-full h-44 sm:h-52 object-cover rounded-xl group-hover/img:scale-105 transition-transform duration-500"
        loading="eager"
      />
    </div>
  );
};

export const SideJobsAndHobbies: React.FC = () => {
  const { lang } = useLanguage();
  const isTh = lang === 'th';
  const tInter = translations[lang].internationalExperiences;
  const tSide = translations[lang].sideJobs;
  const { featuredJob, hobbies } = sideJobsAndHobbies;

  const [expandedFireShow, setExpandedFireShow] = useState<boolean>(false);
  const [expandedHobbyId, setExpandedHobbyId] = useState<string | null>(null);

  const getHobbyExpandedContent = (id: string) => {
    switch (id) {
      case 'photography':
        return (
          <div className="space-y-2 text-xs text-slate-600 bg-slate-50/80 p-3 sm:p-3.5 rounded-lg border border-slate-200/70 mt-3">
            <div className="flex items-center gap-1.5 font-bold text-slate-800">
              <ImageIcon size={13} className="text-indigo-600" />
              <span>{isTh ? 'ขอบเขตบริการและผลงานภาพถ่าย:' : 'Service Scope & Photography Work:'}</span>
            </div>
            <ul className="space-y-1.5 list-disc pl-4 text-slate-600 leading-relaxed text-[11px] sm:text-xs">
              <li>{isTh ? 'ถ่ายภาพอีเวนต์ของมหาวิทยาลัย งานพิธีการ และกิจกรรมชมรม' : 'University ceremonies, student clubs, and official campus events'}</li>
              <li>{isTh ? 'ภาพพอร์ตเทรตและแคนดิด (Candid) เน้นอารมณ์ธรรมชาติและจังหวะเวลา' : 'Portrait & candid shots focusing on genuine expressions'}</li>
              <li>{isTh ? 'แต่งโทนสีและควบคุมคุณภาพส่งมอบงานด้วย Adobe Lightroom' : 'Professional color grading and batch post-production via Adobe Lightroom'}</li>
            </ul>
          </div>
        );
      case 'water-sports':
        return (
          <div className="space-y-3 sm:space-y-3.5 text-xs text-slate-600 bg-slate-50/80 p-3 sm:p-3.5 rounded-lg border border-slate-200/70 mt-3">
            {/* Real Surfing Preview Photo */}
            <div className="relative w-full h-40 sm:h-48 overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-slate-100 group/surf">
              <img
                src="/images/surfing.jpeg"
                alt="Surfing & Water Sports in Phuket"
                className="w-full h-40 sm:h-48 object-cover rounded-xl group-hover/surf:scale-105 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute bottom-2 sm:bottom-2.5 left-2 sm:left-2.5 px-2.5 py-1 rounded-lg bg-black/65 backdrop-blur-xs text-[11px] sm:text-xs font-semibold text-white flex items-center gap-1.5 shadow-xs">
                <Waves size={13} className="text-cyan-300" />
                <span>{isTh ? 'กีฬาทางน้ำและการโต้คลื่น • ชายหาดภูเก็ต' : 'Surfing & Marine Sports • Phuket'}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 font-bold text-slate-800 pt-1">
              <Waves size={13} className="text-cyan-600" />
              <span>{isTh ? 'ทักษะและจุดเน้นด้านกีฬาทางน้ำ:' : 'Marine Disciplines & Outdoor Agility:'}</span>
            </div>
            <ul className="space-y-1.5 list-disc pl-4 text-slate-600 leading-relaxed text-[11px] sm:text-xs">
              <li>{isTh ? 'โต้คลื่น (Surfing) ตามชายหาดฝั่งตะวันตกของภูเก็ต (หาดกะตะ, กะตะน้อย)' : 'Ocean surfing at Phuket’s west-coast breaks (Kata Beach, Nai Harn)'}</li>
              <li>{isTh ? 'ว่ายน้ำทะเลเปิด ฝึกการอ่านกระแสน้ำและตัดสินใจรวดเร็ว' : 'Open water swimming: reading currents and dynamic condition adaptation'}</li>
              <li>{isTh ? 'เสริมสร้างความอดทน สมาธิ และความมั่นคงทางอารมณ์' : 'Nurtures physical endurance, mental stillness, and situational agility'}</li>
            </ul>

            {/* Accordion Video Player for Water Sports */}
            <div className="pt-2 border-t border-slate-200/60">
              <div className="flex items-center justify-between text-[11px] font-bold text-cyan-900 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Play size={11} className="text-cyan-600 fill-cyan-600" />
                  <span>{tSide.waterSportsVideoLabel || (isTh ? 'คลิปการโต้คลื่นและกิจกรรมทางน้ำ' : 'Surfing & Marine Action Clip')}</span>
                </span>
                <span className="font-mono text-[10px] text-slate-400">/videos/watersports.mp4</span>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-slate-300/80 bg-black aspect-video shadow-xs w-full">
                <video 
                  controls 
                  playsInline 
                  poster="/images/surfing.jpeg"
                  className="w-full aspect-video rounded-xl object-cover"
                >
                  <source src="/videos/watersports.mp4" type="video/mp4" />
                  <p className="p-4 text-xs text-slate-300 text-center">
                    {isTh ? 'พร้อมเล่นวิดีโอทันทีเมื่อมีไฟล์ /videos/watersports.mp4' : 'Video player ready for /videos/watersports.mp4'}
                  </p>
                </video>
              </div>
            </div>
          </div>
        );
      case 'travel':
        return (
          <div className="space-y-2 text-xs text-slate-600 bg-slate-50/80 p-3 sm:p-3.5 rounded-lg border border-slate-200/70 mt-3">
            <div className="flex items-center gap-1.5 font-bold text-slate-800">
              <Compass size={13} className="text-blue-600" />
              <span>{isTh ? 'การเปิดโลกทัศน์และการปรับตัว:' : 'Cultural Discovery & Problem Solving:'}</span>
            </div>
            <ul className="space-y-1.5 list-disc pl-4 text-slate-600 leading-relaxed text-[11px] sm:text-xs">
              <li>{isTh ? 'เดินทางสำรวจพื้นที่ใหม่ๆ และแลกเปลี่ยนกับผู้คนหลากหลายวัฒนธรรม' : 'Exploring varied geographies and engaging with diverse communities'}</li>
              <li>{isTh ? 'ฝึกทักษะการวางแผนเส้นทางและการแก้ไขปัญหาเฉพาะหน้า' : 'Cultivates itinerary logistics planning and independent problem solving'}</li>
              <li>{isTh ? 'นำมุมมองที่กว้างขึ้นมาประยุกต์ใช้กับการออกแบบ UX และการทำงานร่วมกัน' : 'Channels broader horizons into empathetic UX design and team teamwork'}</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="hobbies-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* ======================================================== */}
      {/* PART 1 (TOP): International Work Experiences              */}
      {/* ======================================================== */}
      <div id="international-work-section" className="mb-14 sm:mb-16">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 text-center sm:text-left">
          <div className="inline-flex items-center space-x-2 text-blue-800 bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full font-mono text-xs uppercase tracking-wider mb-3">
            <Globe2 size={14} className="text-blue-600" />
            <span>{tInter.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            {tInter.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
            {tInter.subtitle}
          </p>
        </div>

        {/* 3 Experience Cards Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {internationalExperiences.map((exp) => {
            const role = isTh ? exp.roleTh : exp.role;
            const company = isTh ? exp.companyTh : exp.company;
            const location = isTh ? exp.locationTh : exp.location;
            const description = isTh ? exp.descriptionTh : exp.description;
            const tags = isTh && exp.tagsTh ? exp.tagsTh : exp.tags;

            // Direct mapping of uploaded images
            const imageSrc = exp.imageUrl || (
              exp.id === 'starlight-education' 
                ? '/images/starlight_mentor 2.jpeg' 
                : exp.id === 'edc-thailand' 
                ? '/images/edc_skydeck.jpeg' 
                : '/images/malaysia_work.jpeg'
            );

            const backupSrc = exp.id === 'starlight-education' 
              ? '/images/starlight_mentor.jpeg' 
              : undefined;

            return (
              <div
                key={exp.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 p-4 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Real Photo Container: w-full h-44 sm:h-52 object-cover rounded-xl border border-slate-200 shadow-sm */}
                  <CardImage
                    src={imageSrc}
                    alt={role}
                    backupSrc={backupSrc}
                  />

                  {/* Company & Meta */}
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/60">
                      {company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} className="text-slate-400" />
                      {location}
                    </span>
                    {exp.period && (
                      <span className="flex items-center gap-1 font-mono text-[11px] text-slate-400">
                        <Calendar size={11} className="text-slate-400" />
                        {exp.period}
                      </span>
                    )}
                  </div>

                  {/* Title / Role */}
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 leading-snug mb-2 sm:mb-3">
                    {role}
                  </h3>

                  {/* Description with Sam Inline Hyperlink */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {exp.id === 'starlight-education' ? (
                      isTh ? (
                        <>
                          ร่วมดูแลและให้คำแนะนำแก่นักเรียนหลักสูตรนานาชาติในห้องปฏิบัติการวิทยาศาสตร์ (Science Lab) โดยได้ทำงานเคียงข้างกับอดีตนักบินอวกาศ NASA และนักวิทยาศาสตร์ตัวจริงอย่าง{' '}
                          <a
                            href="https://en.wikipedia.org/wiki/Charles_D._Gemar"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => sound.playClick()}
                            className="text-blue-600 hover:text-blue-800 underline underline-offset-2 font-medium inline-flex items-center gap-1 transition-colors"
                          >
                            ‘Sam’ (Charles D. Gemar) ↗
                          </a>
                        </>
                      ) : (
                        <>
                          Guided international students in hands-on science laboratory sessions, co-facilitating experiments directly alongside former NASA astronaut and scientist{' '}
                          <a
                            href="https://en.wikipedia.org/wiki/Charles_D._Gemar"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => sound.playClick()}
                            className="text-blue-600 hover:text-blue-800 underline underline-offset-2 font-medium inline-flex items-center gap-1 transition-colors"
                          >
                            ‘Sam’ (Charles D. Gemar) ↗
                          </a>
                        </>
                      )
                    ) : (
                      description
                    )}
                  </p>

                  {/* Malaysia Quote Callout */}
                  {(exp.quote || exp.quoteTh) && (
                    <div className="mb-4 p-3 rounded-xl bg-slate-50 border-l-4 border-indigo-500 text-xs text-slate-700 leading-relaxed">
                      <div className="flex items-center gap-1.5 text-indigo-700 font-bold mb-1 text-[11px]">
                        <Quote size={12} className="text-indigo-600" />
                        <span>{tInter.quoteLabel || (isTh ? 'บทเรียนและความประทับใจ:' : 'Key Takeaway:')}</span>
                      </div>
                      <p className="italic text-[11px] text-slate-600">
                        {isTh ? exp.quoteTh : exp.quote}
                      </p>
                    </div>
                  )}
                </div>

                {/* Tags Badge Pills */}
                <div className="pt-3.5 sm:pt-4 border-t border-slate-100 mt-2">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] sm:text-xs font-medium px-2 sm:px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ======================================================== */}
      {/* SECTION DIVIDER                                          */}
      {/* ======================================================== */}
      <div className="relative my-14 sm:my-20">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-200" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-slate-50/90 backdrop-blur-xs px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold text-slate-500 border border-slate-200 shadow-2xs uppercase tracking-wider flex items-center gap-1.5">
            <Flame size={13} className="text-orange-500" />
            <span>{isTh ? 'กิจกรรมนอกเวลาเรียน & งานเสริมสร้างสรรค์' : 'Extracurricular & Creative Ventures'}</span>
          </span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* PART 2 (BOTTOM): Creative Side Jobs, Income & Hobbies     */}
      {/* ======================================================== */}
      <div>
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 text-center sm:text-left">
          <div className="inline-flex items-center space-x-2 text-orange-800 bg-orange-50 border border-orange-200/80 px-3.5 py-1 rounded-full font-mono text-xs uppercase tracking-wider mb-3">
            <Flame size={14} className="text-orange-600" />
            <span>{tSide.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            {tSide.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
            {tSide.subtitle}
          </p>
        </div>

        {/* Side Jobs & Hobbies Grid: Stacked 1-col on mobile, 12-col on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Fire Show Performer (Featured Main Card - Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow p-5 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200/70">
                  <Flame size={13} className="text-orange-600" />
                  {isTh ? featuredJob.categoryTh : featuredJob.category}
                </span>
                <span className="text-xs font-mono text-slate-500">Phuket & Festivals</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
                {isTh ? featuredJob.titleTh : featuredJob.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 sm:mb-6">
                {isTh ? featuredJob.descriptionTh : featuredJob.description}
              </p>

              {/* Skills & Badges */}
              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {tSide.skillsLabel}
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {(isTh ? featuredJob.skillsTh : featuredJob.skills).map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      <CheckCircle2 size={12} className="text-orange-600 mr-1.5 shrink-0" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Area: Stats Bar + Video Accordion */}
            <div>
              {/* Stats Bar */}
              <div className="pt-5 sm:pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="text-xs text-slate-500 font-medium">
                    {isTh ? 'จุดเน้นหลัก' : 'Core Discipline'}
                  </div>
                  <div className="text-sm font-bold text-slate-800 mt-0.5">
                    {isTh ? 'วินัยเวที & ความปลอดภัย 100%' : 'Stage Awareness & Safety'}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="text-xs text-slate-500 font-medium">
                    {isTh ? 'สภาวะการทำงาน' : 'Key Strength'}
                  </div>
                  <div className="text-sm font-bold text-emerald-700 mt-0.5">
                    {isTh ? 'สมาธิสูง & แก้ปัญหาเฉพาะหน้า' : 'Composure Under Pressure'}
                  </div>
                </div>
              </div>

              {/* Accordion Toggle Button for Fire Show Video */}
              <button
                onClick={() => {
                  sound.playClick();
                  setExpandedFireShow(prev => !prev);
                }}
                className="mt-4 sm:mt-5 w-full flex items-center justify-between px-4 py-3 rounded-xl bg-orange-50/80 hover:bg-orange-100/80 border border-orange-200/80 text-xs font-bold text-orange-900 transition-all group/btn cursor-pointer shadow-2xs"
              >
                <span className="flex items-center gap-2">
                  <Play size={14} className="text-orange-600 fill-orange-600" />
                  <span>{expandedFireShow ? tSide.collapseBtn : tSide.viewVideoBtn}</span>
                </span>
                <ChevronDown 
                  size={16} 
                  className={`text-orange-600 transition-transform duration-300 ${
                    expandedFireShow ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {/* Collapsible Video Player */}
              <AnimatePresence>
                {expandedFireShow && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden mt-4 pt-4 border-t border-slate-100 space-y-3"
                  >
                    <div className="relative rounded-xl overflow-hidden border border-slate-300/80 bg-black aspect-video shadow-md w-full">
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        controls 
                        className="w-full aspect-video rounded-xl object-cover"
                      >
                        <source src="/videos/fireshow.mov" type="video/quicktime" />
                        <source src="/videos/fireshow.mov" type="video/mp4" />
                        {isTh ? 'เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ' : 'Your browser does not support playing this video.'}
                      </video>
                    </div>
                    <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 font-medium px-1 gap-1">
                      <span className="flex items-center gap-1.5 text-orange-800">
                        <Flame size={12} className="text-orange-600" />
                        <span>{isTh ? 'คลิปการแสดงควงกระบองไฟสด (Live Performance Clip)' : 'Live Fire Performance Clip'}</span>
                      </span>
                      <span className="font-mono text-[10px] text-slate-400">/videos/fireshow.mov</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Freelance Photography, Water Sports & Travel (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="px-1 sm:px-2">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <Sparkles size={16} className="text-blue-600" />
                {tSide.hobbiesTitle}
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                {tSide.hobbiesSubtitle}
              </p>
            </div>

            <div className="space-y-3.5 flex-1 flex flex-col justify-between">
              {hobbies.map((hobby) => {
                const getIcon = () => {
                  if (hobby.id === 'photography') return <Camera size={18} className="text-indigo-600" />;
                  if (hobby.id === 'water-sports') return <Waves size={18} className="text-cyan-600" />;
                  return <Compass size={18} className="text-blue-600" />;
                };

                const isExpanded = expandedHobbyId === hobby.id;

                return (
                  <div
                    key={hobby.id}
                    className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md p-4 sm:p-5 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 sm:p-2.5 rounded-lg bg-slate-50 border border-slate-200 shrink-0">
                        {getIcon()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
                          <h5 className="text-sm sm:text-base font-bold text-slate-900">
                            {isTh ? hobby.titleTh : hobby.title}
                          </h5>
                          <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                            {isTh ? hobby.tagTh : hobby.tag}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                          {isTh ? hobby.descriptionTh : hobby.description}
                        </p>

                        {/* Accordion Toggle for Hobby Cards */}
                        <button
                          onClick={() => {
                            sound.playClick();
                            setExpandedHobbyId(prev => prev === hobby.id ? null : hobby.id);
                          }}
                          className="mt-3 flex items-center justify-between w-full pt-2 border-t border-slate-100 text-[11px] font-semibold text-slate-500 hover:text-blue-700 transition-colors group/hb cursor-pointer"
                        >
                          <span>
                            {isExpanded 
                              ? tSide.collapseBtn 
                              : (hobby.id === 'photography' 
                                  ? (isTh ? 'ดูรายละเอียดบริการถ่ายภาพ' : 'View Photography Scope')
                                  : hobby.id === 'water-sports'
                                  ? (isTh ? 'ชมรูปพรีวิว & คลิปวิดีโอ' : 'View Photos & Action Clips')
                                  : (isTh ? 'ดูรายละเอียดกิจกรรมเพิ่มเติม' : 'View Activity Details')
                                )}
                          </span>
                          <ChevronDown 
                            size={14} 
                            className={`text-slate-400 group-hover/hb:text-blue-600 transition-transform duration-300 ${
                              isExpanded ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>

                        {/* Collapsible Content */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              {getHobbyExpandedContent(hobby.id)}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

