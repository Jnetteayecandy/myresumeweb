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
  Image as ImageIcon 
} from 'lucide-react';
import { sideJobsAndHobbies } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

export const SideJobsAndHobbies: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].sideJobs;
  const isTh = lang === 'th';
  const { featuredJob, hobbies } = sideJobsAndHobbies;

  const [expandedFireShow, setExpandedFireShow] = useState<boolean>(false);
  const [expandedHobbyId, setExpandedHobbyId] = useState<string | null>(null);

  const getHobbyExpandedContent = (id: string) => {
    switch (id) {
      case 'photography':
        return (
          <div className="space-y-2 text-xs text-slate-600 bg-slate-50/80 p-3 rounded-lg border border-slate-200/70 mt-3">
            <div className="flex items-center gap-1.5 font-bold text-slate-800">
              <ImageIcon size={13} className="text-indigo-600" />
              <span>{isTh ? 'ขอบเขตบริการและผลงานภาพถ่าย:' : 'Service Scope & Photography Work:'}</span>
            </div>
            <ul className="space-y-1 list-disc pl-4 text-slate-600 leading-relaxed text-[11px]">
              <li>{isTh ? 'ถ่ายภาพอีเวนต์ของมหาวิทยาลัย งานพิธีการ และกิจกรรมชมรม' : 'University ceremonies, student clubs, and official campus events'}</li>
              <li>{isTh ? 'ภาพพอร์ตเทรตและแคนดิด (Candid) เน้นอารมณ์ธรรมชาติและจังหวะเวลา' : 'Portrait & candid shots focusing on genuine expressions'}</li>
              <li>{isTh ? 'แต่งโทนสีและควบคุมคุณภาพส่งมอบงานด้วย Adobe Lightroom' : 'Professional color grading and batch post-production via Adobe Lightroom'}</li>
            </ul>
          </div>
        );
      case 'water-sports':
        return (
          <div className="space-y-2 text-xs text-slate-600 bg-slate-50/80 p-3 rounded-lg border border-slate-200/70 mt-3">
            <div className="flex items-center gap-1.5 font-bold text-slate-800">
              <Waves size={13} className="text-cyan-600" />
              <span>{isTh ? 'ทักษะและจุดเน้นด้านกีฬาทางน้ำ:' : 'Marine Disciplines & Outdoor Agility:'}</span>
            </div>
            <ul className="space-y-1 list-disc pl-4 text-slate-600 leading-relaxed text-[11px]">
              <li>{isTh ? 'โต้คลื่น (Surfing) ตามชายหาดฝั่งตะวันตกของภูเก็ต (หาดกะตะ, กะตะน้อย)' : 'Ocean surfing at Phuket’s west-coast breaks (Kata Beach, Nai Harn)'}</li>
              <li>{isTh ? 'ว่ายน้ำทะเลเปิด ฝึกการอ่านกระแสน้ำและตัดสินใจรวดเร็ว' : 'Open water swimming: reading currents and dynamic condition adaptation'}</li>
              <li>{isTh ? 'เสริมสร้างความอดทน สมาธิ และความมั่นคงทางอารมณ์' : 'Nurtures physical endurance, mental stillness, and situational agility'}</li>
            </ul>
          </div>
        );
      case 'travel':
        return (
          <div className="space-y-2 text-xs text-slate-600 bg-slate-50/80 p-3 rounded-lg border border-slate-200/70 mt-3">
            <div className="flex items-center gap-1.5 font-bold text-slate-800">
              <Compass size={13} className="text-blue-600" />
              <span>{isTh ? 'การเปิดโลกทัศน์และการปรับตัว:' : 'Cultural Discovery & Problem Solving:'}</span>
            </div>
            <ul className="space-y-1 list-disc pl-4 text-slate-600 leading-relaxed text-[11px]">
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
    <section id="hobbies-section" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 text-center sm:text-left">
        <div className="inline-flex items-center space-x-2 text-orange-700 bg-orange-50 border border-orange-200/80 px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider mb-3">
          <Flame size={14} className="text-orange-600" />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t.title}
        </h2>
        <p className="text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Fire Show Performer (Featured Main Card - Span 7) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-200/70">
                <Flame size={13} className="text-orange-600" />
                {isTh ? featuredJob.categoryTh : featuredJob.category}
              </span>
              <span className="text-xs font-mono text-slate-500">Phuket & Festivals</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              {isTh ? featuredJob.titleTh : featuredJob.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {isTh ? featuredJob.descriptionTh : featuredJob.description}
            </p>

            {/* Skills & Badges */}
            <div className="space-y-3 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {t.skillsLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {(isTh ? featuredJob.skillsTh : featuredJob.skills).map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    <CheckCircle2 size={12} className="text-orange-600 mr-1.5" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Area: Stats Bar + Video Accordion */}
          <div>
            {/* Stats Bar */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
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

            {/* Accordion Toggle Button for Video Player */}
            <button
              onClick={() => {
                sound.playClick();
                setExpandedFireShow(prev => !prev);
              }}
              className="mt-5 w-full flex items-center justify-between px-4 py-3 rounded-xl bg-orange-50/70 hover:bg-orange-100/70 border border-orange-200/80 text-xs font-bold text-orange-900 transition-all group/btn cursor-pointer shadow-2xs"
            >
              <span className="flex items-center gap-2">
                <Play size={14} className="text-orange-600 fill-orange-600" />
                <span>{expandedFireShow ? t.collapseBtn : t.viewVideoBtn}</span>
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
                  <div className="relative rounded-xl overflow-hidden border border-slate-300/80 bg-black aspect-video shadow-md">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      controls 
                      className="w-full h-full aspect-video rounded-xl object-cover"
                    >
                      <source src="/videos/fireshow.mov" type="video/quicktime" />
                      <source src="/videos/fireshow.mov" type="video/mp4" />
                      {isTh ? 'เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ' : 'Your browser does not support playing this video.'}
                    </video>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium px-1">
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
          <div className="px-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <Sparkles size={16} className="text-blue-600" />
              {t.hobbiesTitle}
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              {t.hobbiesSubtitle}
            </p>
          </div>

          <div className="space-y-3 flex-1 flex flex-col justify-between">
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
                  className="bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md p-4 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 shrink-0">
                      {getIcon()}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h5 className="text-sm font-bold text-slate-900">
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
                            ? t.collapseBtn 
                            : (hobby.id === 'photography' 
                                ? (isTh ? 'ดูรายละเอียดบริการถ่ายภาพ' : 'View Photography Scope')
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
    </section>
  );
};
