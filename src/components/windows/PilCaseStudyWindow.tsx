import React, { useState } from 'react';
import { 
  Pill, 
  ShieldCheck, 
  QrCode, 
  Users, 
  CheckCircle2, 
  AlertTriangle, 
  ExternalLink,
  Sparkles, 
  Eye, 
  Layers, 
  Workflow
} from 'lucide-react';
import { flagshipProject } from '../../data/portfolioData';
import { sound } from '../../utils/sound';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../data/translations';

export const PilCaseStudyWindow: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].pilWindow;
  const isTh = lang === 'th';
  const [activeTab, setActiveTab] = useState<'overview' | 'interactive-demo' | 'architecture' | 'pharmacist-sync'>('overview');
  const [selectedMed, setSelectedMed] = useState<'paracetamol' | 'amoxicillin' | 'metformin'>('paracetamol');
  const [elderlyMode, setElderlyMode] = useState(false);

  const mockMedications = {
    en: {
      paracetamol: {
        brand: 'Sara / Tylenol (Paracetamol 500 mg)',
        generic: 'Acetaminophen / Paracetamol',
        indication: 'Relief of mild to moderate pain, headache, and fever reduction.',
        dosage: 'Take 1-2 tablets every 4-6 hours as needed for symptoms (Do not exceed 8 tablets / 4,000 mg daily).',
        warning: 'Do not use in patients with severe hepatic impairment or known allergy. Accidental overdose may cause acute liver failure.',
        pharmacistNote: 'Verified: Audited & certified by Clinical Pharmacist Advisory Board',
        contraindications: ['Severe Cirrhosis / Liver Disease', 'Paracetamol Hypersensitivity'],
        qrCodeId: 'PIL-TH-PAR-0029'
      },
      amoxicillin: {
        brand: 'Amoxycillin 500 mg (Capsule)',
        generic: 'Amoxicillin Trihydrate',
        indication: 'Broad-spectrum antibiotic for bacterial respiratory tract, tonsillitis, and skin infections.',
        dosage: 'Take 1 capsule 3 times daily before or after meals (Must complete the full prescribed course).',
        warning: 'Discontinue immediately and seek emergency care if rash, swelling of lips/face, or breathing difficulty occurs.',
        pharmacistNote: 'Verified: Critical reminder added — "Must complete the full prescribed course even if symptoms resolve"',
        contraindications: ['History of Penicillin/Beta-lactam Allergy'],
        qrCodeId: 'PIL-TH-AMX-0104'
      },
      metformin: {
        brand: 'Glucophage (Metformin HCl 500 mg)',
        generic: 'Metformin Hydrochloride',
        indication: 'Blood glucose reduction and glycemic control for type 2 diabetes mellitus.',
        dosage: 'Take 1 tablet with morning and evening meals to minimize gastrointestinal discomfort.',
        warning: 'Avoid alcohol consumption while on therapy. Consult physician before radiological contrast procedures.',
        pharmacistNote: 'Verified: Formatted in extra-large font mode for elderly diabetic patients',
        contraindications: ['Severe Renal Dysfunction (eGFR < 30)', 'Lactic Acidosis'],
        qrCodeId: 'PIL-TH-MET-0588'
      }
    },
    th: {
      paracetamol: {
        brand: 'Sara / Tylenol (Paracetamol 500 mg)',
        generic: 'Acetaminophen / Paracetamol',
        indication: 'บรรเทาอาการปวดศีรษะ ลดไข้ บรรเทาอาการปวดเมื่อยกล้ามเนื้อ',
        dosage: 'รับประทานครั้งละ 1-2 เม็ด ทุก 4-6 ชั่วโมงเมื่อมีอาการ (ห้ามเกิน 8 เม็ด/วัน หรือ 4,000 มก.)',
        warning: 'ห้ามใช้ในผู้ที่แพ้ยานี้ หรือผู้ป่วยโรคตับรุนแรง การรับประทานยาเกินขนาดอาจทำให้ตับวายเฉียบพลัน',
        pharmacistNote: 'ตรวจสอบแล้ว: ตรวจสอบความถูกต้องโดย ภญ. ทีมที่ปรึกษา (Certified Pharmacist Verified)',
        contraindications: ['ตับแข็งขั้นรุนแรง', 'แพ้ตัวยาพาราเซตามอล'],
        qrCodeId: 'PIL-TH-PAR-0029'
      },
      amoxicillin: {
        brand: 'Amoxycillin 500 mg (Capsule)',
        generic: 'Amoxicillin Trihydrate',
        indication: 'ยาปฏิชีวนะฆ่าเชื้อแบคทีเรียในระบบทางเดินหายใจ ต่อมทอนซิลอักเสบ หรือผิวหนัง',
        dosage: 'รับประทานครั้งละ 1 เม็ด วันละ 3 ครั้ง ก่อนหรือหลังอาหาร (ต้องทานติดต่อกันจนหมดตามแพทย์สั่ง)',
        warning: 'หากมีผื่นคัน บวมที่ริมฝีปาก ใบหน้า หรือหายใจติดขัด ให้หยุดยาและพบแพทย์ทันที',
        pharmacistNote: 'ตรวจสอบแล้ว: เพิ่มข้อความย้ำเตือนสำคัญ — "ต้องทานยาให้ครบตามแพทย์สั่งแม้ว่าอาการจะดีขึ้นแล้ว"',
        contraindications: ['ประวัติแพ้ยาในกลุ่มเพนิซิลลิน (Penicillin)'],
        qrCodeId: 'PIL-TH-AMX-0104'
      },
      metformin: {
        brand: 'Glucophage (Metformin HCl 500 mg)',
        generic: 'Metformin Hydrochloride',
        indication: 'ยาลดระดับน้ำตาลในเลือดสำหรับผู้ป่วยเบาหวานชนิดที่ 2',
        dosage: 'รับประทานครั้งละ 1 เม็ด พร้อมอาหารเช้าและเย็น เพื่อลดผลข้างเคียงต่อกระเพาะอาหาร',
        warning: 'หลีกเลี่ยงการดื่มเครื่องดื่มแอลกอฮอล์ขณะใช้ยา และต้องแจ้งแพทย์หากต้องเข้ารับการฉีดสารทึบรังสี',
        pharmacistNote: 'ตรวจสอบแล้ว: ปรับฟอนต์ให้ใหญ่เป็นพิเศษเพื่อผู้สูงอายุที่เป็นเบาหวาน',
        contraindications: ['ภาวะไตวายรุนแรง (eGFR < 30)', 'ภาวะเลือดเป็นกรดจากกรดแล็กติก'],
        qrCodeId: 'PIL-TH-MET-0588'
      }
    }
  };

  const currentMed = mockMedications[lang][selectedMed];

  return (
    <div className="space-y-6 text-slate-700 font-sans">
      {/* Top Header Card */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200/70">
              {t.flagshipBadge}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/70 flex items-center gap-1">
              <ShieldCheck size={13} className="text-emerald-600" />
              {t.partnerBadge}
            </span>
            <span className="text-xs font-mono text-slate-500">
              {t.systemId}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {t.thaiTitle}
          </p>
        </div>

        {/* Live Website Button with Guest Access Note */}
        <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
          <a
            href="https://medication-project-tau.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all shadow-sm hover:shadow-md"
          >
            <span>{t.liveButtonLabel}</span>
            <ExternalLink size={14} />
          </a>
          <span className="text-[11px] font-medium text-slate-500">
            {t.liveButtonGuest}
          </span>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex items-center space-x-2 border-b border-slate-200 pb-2 overflow-x-auto text-xs font-medium">
        <button
          onClick={() => {
            sound.playClick(900);
            setActiveTab('overview');
          }}
          className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap flex items-center space-x-2 ${
            activeTab === 'overview'
              ? 'bg-blue-600 text-white shadow-xs font-semibold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Layers size={14} />
          <span>{t.tabs.overview}</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(950);
            setActiveTab('interactive-demo');
          }}
          className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap flex items-center space-x-2 ${
            activeTab === 'interactive-demo'
              ? 'bg-blue-600 text-white shadow-xs font-semibold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <QrCode size={14} />
          <span>{t.tabs.demo}</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(1000);
            setActiveTab('architecture');
          }}
          className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap flex items-center space-x-2 ${
            activeTab === 'architecture'
              ? 'bg-blue-600 text-white shadow-xs font-semibold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Workflow size={14} />
          <span>{t.tabs.architecture}</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(1050);
            setActiveTab('pharmacist-sync');
          }}
          className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap flex items-center space-x-2 ${
            activeTab === 'pharmacist-sync'
              ? 'bg-blue-600 text-white shadow-xs font-semibold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Users size={14} />
          <span>{t.tabs.pharmacist}</span>
        </button>
      </div>

      {/* Tab 1: Executive Summary */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* The Challenge */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <div className="flex items-center space-x-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
                <AlertTriangle size={15} />
                <span>{t.challengeTitle}</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                {t.challenges.map((c, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Solution */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <div className="flex items-center space-x-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 size={15} />
                <span>{t.solutionTitle}</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                {t.solutions.map((s, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Highlights Box */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
              <Sparkles size={14} className="text-blue-600" />
              {t.highlightsTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600">
              {flagshipProject.highlights?.map((hl, idx) => (
                <div key={idx} className="flex items-start space-x-2 bg-white p-3 rounded-xl border border-slate-200/70">
                  <CheckCircle2 size={15} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Live Leaflet Demo */}
      {activeTab === 'interactive-demo' && (
        <div className="space-y-4">
          {/* Medication Selector & Elderly Mode Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-slate-600">{t.selectMedLabel}</span>
              <div className="flex space-x-1.5">
                {(['paracetamol', 'amoxicillin', 'metformin'] as const).map((med) => (
                  <button
                    key={med}
                    onClick={() => {
                      sound.playClick(1000);
                      setSelectedMed(med);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      selectedMed === med
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {med.charAt(0).toUpperCase() + med.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Elderly Friendly Toggle */}
            <button
              onClick={() => {
                sound.playClick(900);
                setElderlyMode(!elderlyMode);
              }}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                elderlyMode
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              <Eye size={14} />
              <span>{elderlyMode ? t.elderlyModeOn : t.elderlyModeOff}</span>
            </button>
          </div>

          {/* Simulated Mobile Leaflet View */}
          <div className={`p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-md space-y-5 transition-all ${elderlyMode ? 'scale-[1.02]' : ''}`}>
            
            {/* Header info */}
            <div className="border-b border-slate-200 pb-4 flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono text-emerald-700 font-semibold mb-1">
                  <ShieldCheck size={14} />
                  <span>{t.verifiedLeaflet}</span>
                </div>
                <h3 className={`font-extrabold text-slate-900 ${elderlyMode ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
                  {currentMed.brand}
                </h3>
                <p className={`text-slate-600 ${elderlyMode ? 'text-base font-semibold' : 'text-xs'}`}>
                  {t.genericLabel} {currentMed.generic}
                </p>
              </div>

              {/* Dynamic QR Mock */}
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center font-mono text-[10px] text-slate-600 shrink-0">
                <QrCode size={40} className="text-slate-800 mx-auto" />
                <span className="block mt-1 font-bold">{t.scanQr}</span>
                <span className="text-[9px] text-slate-400">{currentMed.qrCodeId}</span>
              </div>
            </div>

            {/* Section 1: Indications */}
            <div className="space-y-1.5">
              <h4 className={`font-bold text-blue-700 ${elderlyMode ? 'text-lg' : 'text-xs uppercase tracking-wider'}`}>
                {t.sections.indications}
              </h4>
              <p className={`text-slate-700 leading-relaxed ${elderlyMode ? 'text-base font-medium' : 'text-xs sm:text-sm'}`}>
                {currentMed.indication}
              </p>
            </div>

            {/* Section 2: Dosage */}
            <div className="space-y-1.5 p-4 rounded-xl bg-blue-50/70 border border-blue-200/80">
              <h4 className={`font-bold text-blue-900 ${elderlyMode ? 'text-lg' : 'text-xs uppercase tracking-wider'}`}>
                {t.sections.dosage}
              </h4>
              <p className={`text-slate-800 leading-relaxed font-medium ${elderlyMode ? 'text-base' : 'text-xs sm:text-sm'}`}>
                {currentMed.dosage}
              </p>
            </div>

            {/* Section 3: Critical Warning */}
            <div className="space-y-2 p-4 rounded-xl bg-rose-50 border border-rose-200">
              <h4 className={`font-bold text-rose-900 flex items-center gap-1.5 ${elderlyMode ? 'text-lg' : 'text-xs uppercase tracking-wider'}`}>
                <AlertTriangle size={15} />
                <span>{t.sections.warnings}</span>
              </h4>
              <p className={`text-rose-800 leading-relaxed font-medium ${elderlyMode ? 'text-base' : 'text-xs sm:text-sm'}`}>
                {currentMed.warning}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-xs font-bold text-rose-800">{t.sections.contraindicationPrefix}</span>
                {currentMed.contraindications.map((ci, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-rose-100 text-rose-900 text-[11px] font-semibold">
                    {ci}
                  </span>
                ))}
              </div>
            </div>

            {/* Pharmacist Cryptographic Sign-Off Footer */}
            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 font-mono">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>{currentMed.pharmacistNote}</span>
              </div>
              <div>
                <span>{t.pharmacistSigned}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Technical Architecture */}
      {activeTab === 'architecture' && (
        <div className="space-y-5">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Workflow size={16} className="text-blue-600" />
              <span>{t.archTitle}</span>
            </h3>

            {/* 4 Pipeline Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {t.archSteps.map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="text-[11px] font-mono text-slate-500 uppercase">{step.step}</div>
                  <div className="font-bold text-xs text-slate-900">{step.role}</div>
                  <div className="text-[11px] text-blue-700 font-medium">{step.sub}</div>
                </div>
              ))}
            </div>

            {/* TypeScript Schema Box */}
            <div className="p-4 rounded-xl bg-slate-900 font-mono text-xs text-slate-200 space-y-2">
              <div className="text-slate-400">// Medication Domain Schema (TypeScript / Flask Models)</div>
              <pre className="text-blue-300 overflow-x-auto">
{`interface PatientInformationLeaflet {
  id: string; // UUID
  medicationCode: string; // Thai FDA Standard Registration
  genericName: string;
  brandNames: string[];
  activeIngredients: { name: string; dosageStrength: string }[];
  indicationsPlainLanguage: string; // Patient-friendly description
  administrationRules: string;
  criticalWarnings: string[];
  contraindications: string[];
  pharmacistAuditorId: string;
  verifiedAt: string; // ISO Date
}`}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Pharmacist Collaboration */}
      {activeTab === 'pharmacist-sync' && (
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Users size={16} className="text-blue-600" />
              <span>{t.pharmaSyncTitle}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.pharmaSyncDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {t.pharmaPoints.map((pt, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2"
                >
                  <div className="font-bold text-xs text-blue-700">
                    {pt.title}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
