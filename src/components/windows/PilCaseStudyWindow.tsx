import React, { useState } from 'react';
import { 
  Pill, 
  ShieldCheck, 
  QrCode, 
  Users, 
  CheckCircle2, 
  AlertTriangle, 
  FileCheck, 
  Sparkles, 
  Eye, 
  Layers, 
  Workflow
} from 'lucide-react';
import { flagshipProject } from '../../data/portfolioData';
import { sound } from '../../utils/sound';

export const PilCaseStudyWindow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'interactive-demo' | 'architecture' | 'pharmacist-sync'>('overview');
  const [selectedMed, setSelectedMed] = useState<'paracetamol' | 'amoxicillin' | 'metformin'>('paracetamol');
  const [elderlyMode, setElderlyMode] = useState(false);

  const mockMedications = {
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
      warning: 'หากมีผื่นคัน ปากบวม หายใจไม่ออก ให้หยุดยาทันทีและพบแพทย์ (อาการแพ้ยาตระกูลเพนิซิลลิน)',
      pharmacistNote: 'ตรวจสอบแล้ว: เน้นย้ำข้อความ "ต้องรับประทานติดต่อกันจนหมดแผงแม้จะหายป่วยแล้ว"',
      contraindications: ['ประวัติแพ้ยาในกลุ่ม Penicillin'],
      qrCodeId: 'PIL-TH-AMX-0104'
    },
    metformin: {
      brand: 'Glucophage (Metformin HCl 500 mg)',
      generic: 'Metformin Hydrochloride',
      indication: 'ยาลดระดับน้ำตาลในเลือดสำหรับผู้ป่วยเบาหวานชนิดที่ 2',
      dosage: 'รับประทานครั้งละ 1 เม็ด พร้อมอาหารมื้อเช้า-เย็น เพื่อลดอาการคลื่นไส้ แน่นท้อง',
      warning: 'หลีกเลี่ยงการดื่มเครื่องดื่มแอลกอฮอล์ขณะรับประทานยา แจ้งแพทย์ทันทีก่อนตรวจฉีดสีเอกซเรย์',
      pharmacistNote: 'ตรวจสอบแล้ว: จัดทำคู่มือขนาดตัวอักษรใหญ่พิเศษสำหรับผู้สูงอายุที่เป็นเบาหวาน',
      contraindications: ['ภาวะไตเสื่อมรุนแรง (eGFR < 30)', 'ภาวะเลือดเป็นกรด Lactic Acidosis'],
      qrCodeId: 'PIL-TH-MET-0588'
    }
  };

  const currentMed = mockMedications[selectedMed];

  return (
    <div className="space-y-6 text-slate-200">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/40 via-slate-900/60 to-slate-950 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
              <Pill size={12} />
              FLAGSHIP HEALTHCARE CASE STUDY
            </span>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
              <ShieldCheck size={12} />
              Pharmacist Co-Engineered
            </span>
          </div>

          <div className="text-xs font-mono text-slate-400">
            System ID: <span className="text-cyan-300">MED-PIL-PROD</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          PIL Management System
        </h2>
        <p className="text-base text-cyan-200/90 font-medium mt-1">
          ระบบบริหารจัดการเอกสารกำกับยาฉบับประชาชน (Patient Information Leaflets)
        </p>
        <p className="text-sm text-slate-300 max-w-3xl mt-2 leading-relaxed">
          {flagshipProject.description}
        </p>

        {/* Quick Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-5 border-t border-white/[0.08]">
          {flagshipProject.metrics?.map((m, idx) => (
            <div key={idx} className="bg-white/[0.03] p-3 rounded-xl border border-white/[0.05]">
              <div className="text-xs font-mono text-slate-400">{m.label}</div>
              <div className="text-lg font-bold text-cyan-400 mt-0.5">{m.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center space-x-2 border-b border-white/[0.08] pb-1 font-mono text-xs overflow-x-auto">
        {[
          { id: 'overview', label: '1. Executive Summary', icon: <FileCheck size={14} /> },
          { id: 'interactive-demo', label: '2. Live Leaflet Demo', icon: <Eye size={14} /> },
          { id: 'architecture', label: '3. Technical Architecture', icon: <Layers size={14} /> },
          { id: 'pharmacist-sync', label: '4. Pharmacist Co-Design', icon: <Users size={14} /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              sound.playClick();
              setActiveTab(tab.id as typeof activeTab);
            }}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab 1: Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* The Challenge */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <div className="flex items-center space-x-2 text-amber-400 font-semibold text-sm">
                <AlertTriangle size={16} />
                <span>The Challenge (ปัญหาเดิมในโรงพยาบาล/ร้านยา)</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed">
                <li>
                  <strong>ตัวหนังสือเล็กและศัพท์ยาก:</strong> เอกสารกำกับยาฉบับเดิม (Package Insert) มีศัพท์เทคนิคทางการแพทย์ ประชาชนทั่วไปและผู้สูงอายุอ่านไม่เข้าใจ
                </li>
                <li>
                  <strong>การสูญหายและการเข้าถึง:</strong> ผู้ป่วยมักทำซองยาหรือใบแทรกหาย เมื่อมีอาการผิดปกติไม่รู้ว่าต้องปฏิบัติตัวอย่างไร
                </li>
                <li>
                  <strong>การอัปเดตข้อมูลยา:</strong> เมื่อมีคำเตือนใหม่จาก อย. การกระจายข้อมูลฉบับอัปเดตไปยังคนไข้แบบกระดาษทำได้ยากมาก
                </li>
              </ul>
            </div>

            {/* The Solution */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-cyan-500/20 space-y-3">
              <div className="flex items-center space-x-2 text-cyan-400 font-semibold text-sm">
                <CheckCircle2 size={16} />
                <span>The Engineering Solution (ระบบที่เราสร้างขึ้น)</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed">
                <li>
                  <strong>โครงสร้างข้อมูลแบบแบ่งส่วน (Structured PIL Schema):</strong> แยกประเภทยา, ขนาดยา, ข้อควรระวังพิเศษ และข้อห้ามใช้เด็ดขาดอย่างชัดเจน
                </li>
                <li>
                  <strong>Dynamic QR Code on Pill Packs:</strong> ผู้ป่วยสแกนจากซองยาแล้วเปิดอ่านเอกสารฉบับประชาชนได้ทันทีใน 1 คลิก ไม่ต้องล็อกอิน
                </li>
                <li>
                  <strong>Elderly-Friendly Accessible UI:</strong> ปรับขนาดตัวอักษรได้ มี Contrast สีที่ผู้สูงอายุและผู้มีความบกพร่องทางสายตาอ่านง่าย (WCAG AAA)
                </li>
              </ul>
            </div>
          </div>

          {/* Key Engineering Highlights */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <Sparkles size={16} className="text-cyan-400" />
              จุดเด่นทางวิศวกรรมซอฟต์แวร์ (Software Engineering Highlights)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {flagshipProject.highlights?.map((hl, i) => (
                <div key={i} className="flex items-start space-x-2 text-xs text-slate-300 bg-white/[0.02] p-3 rounded-lg border border-white/[0.04]">
                  <span className="text-cyan-400 font-mono mt-0.5">0{i+1}.</span>
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Interactive Live Leaflet Demo */}
      {activeTab === 'interactive-demo' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl text-xs font-mono">
            <div className="flex items-center space-x-2">
              <span className="text-slate-400">เลือกตัวอย่างยาเพื่อทดสอบ:</span>
              {(['paracetamol', 'amoxicillin', 'metformin'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    sound.playClick();
                    setSelectedMed(key);
                  }}
                  className={`px-2.5 py-1 rounded-md capitalize transition-all ${
                    selectedMed === key
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_10px_rgba(0,240,255,0.4)]'
                      : 'bg-white/[0.05] text-slate-300 hover:bg-white/[0.1]'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                sound.playClick(900);
                setElderlyMode(!elderlyMode);
              }}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-md border transition-all ${
                elderlyMode
                  ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                  : 'bg-white/[0.04] border-white/[0.08] text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>{elderlyMode ? '✓ โหมดผู้สูงอายุ (Large Text ON)' : '🔍 เปิดโหมดอ่านง่าย/ผู้สูงอายุ'}</span>
            </button>
          </div>

          {/* Interactive Leaflet Paper Mockup */}
          <div className={`p-6 rounded-2xl border transition-all duration-300 ${
            elderlyMode 
              ? 'bg-[#151922] border-amber-500/30 shadow-2xl scale-[1.01]' 
              : 'bg-[#0f1118] border-white/[0.1]'
          }`}>
            {/* Leaflet Header */}
            <div className="flex items-start justify-between border-b border-white/[0.08] pb-4 mb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                  {currentMed.qrCodeId} • VERIFIED PHARMA LEAFLET
                </span>
                <h3 className={`font-bold text-white mt-1.5 ${elderlyMode ? 'text-2xl' : 'text-lg'}`}>
                  {currentMed.brand}
                </h3>
                <p className={`text-slate-400 font-mono ${elderlyMode ? 'text-sm' : 'text-xs'}`}>
                  ชื่อสามัญทางยา (Generic Name): <span className="text-slate-200 font-medium">{currentMed.generic}</span>
                </p>
              </div>

              <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-center hidden sm:block">
                <QrCode size={36} className="text-cyan-400 mx-auto" />
                <span className="text-[9px] font-mono text-slate-400 mt-1 block">Scan PIL</span>
              </div>
            </div>

            {/* Content Sections */}
            <div className={`space-y-4 ${elderlyMode ? 'text-base' : 'text-sm'}`}>
              <div className="bg-white/[0.02] p-4 rounded-xl border border-white/[0.04]">
                <div className="font-semibold text-cyan-300 text-xs font-mono uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-cyan-400" />
                  1. ยานี้ใช้เพื่อรักษาอะไร (Indications)
                </div>
                <p className="text-slate-200 leading-relaxed">{currentMed.indication}</p>
              </div>

              <div className="bg-white/[0.02] p-4 rounded-xl border border-white/[0.04]">
                <div className="font-semibold text-emerald-300 text-xs font-mono uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  2. วิธีใช้ยาและขนาดยาที่ถูกต้อง (Dosage & Instructions)
                </div>
                <p className="text-slate-200 leading-relaxed font-medium">{currentMed.dosage}</p>
              </div>

              <div className="bg-rose-950/20 p-4 rounded-xl border border-rose-500/30">
                <div className="font-semibold text-rose-300 text-xs font-mono uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <AlertTriangle size={14} className="text-rose-400" />
                  3. ข้อควรระวังและอาการเตือนอันตราย (Important Warnings)
                </div>
                <p className="text-rose-200/90 leading-relaxed">{currentMed.warning}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {currentMed.contraindications.map((c, i) => (
                    <span key={i} className="text-[11px] font-mono px-2 py-0.5 bg-rose-500/10 text-rose-300 rounded border border-rose-500/20">
                      ห้ามใช้: {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pharmacist Badge Verification */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                <div className="flex items-center space-x-2">
                  <ShieldCheck size={16} className="text-cyan-400" />
                  <span>{currentMed.pharmacistNote}</span>
                </div>
                <span className="text-[10px] text-slate-400 hidden sm:inline">Cryptographically Signed</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Technical Architecture */}
      {activeTab === 'architecture' && (
        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-4">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <Workflow size={16} className="text-cyan-400" />
              Data Pipeline & Architecture Flow
            </h3>

            {/* Architecture diagram mockup */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-center space-y-1">
                <div className="text-slate-400">1. Data Ingestion</div>
                <div className="font-semibold text-white">Pharmacist Editor</div>
                <div className="text-[10px] text-cyan-400">Draft & Review State</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-cyan-500/30 text-center space-y-1 shadow-[0_0_12px_rgba(0,240,255,0.1)]">
                <div className="text-slate-400">2. Normalization</div>
                <div className="font-semibold text-cyan-300">Domain Parser</div>
                <div className="text-[10px] text-cyan-400">FDA Rules Engine</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-center space-y-1">
                <div className="text-slate-400">3. Storage & Index</div>
                <div className="font-semibold text-white">PostgreSQL + Redis</div>
                <div className="text-[10px] text-purple-400">Sub-85ms Search Index</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-emerald-500/30 text-center space-y-1 shadow-[0_0_12px_rgba(16,185,129,0.1)]">
                <div className="text-slate-400">4. Distribution</div>
                <div className="font-semibold text-emerald-300">PWA & QR Reader</div>
                <div className="text-[10px] text-emerald-400">Offline Cache Ready</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-black/40 border border-white/[0.05] font-mono text-xs text-slate-300 space-y-2">
              <div className="text-slate-500">// Core Schema Entity Definition (TypeScript)</div>
              <pre className="text-cyan-300 overflow-x-auto">
{`interface PatientInformationLeaflet {
  id: LeafletUUID;
  medicationCode: ThaiFDAStandardCode;
  brandNames: string[];
  activeIngredients: {
    name: string;
    dosageStrength: string;
  }[];
  indicationsPlainLanguage: string; // เขียนสำหรับประชาชน
  administrationRules: AdministrationSchedule;
  criticalWarnings: BlackBoxWarning[];
  pharmacistAuditorId: LicenseNumber;
  approvedAt: ISODateString;
}`}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Pharmacist Co-Design */}
      {activeTab === 'pharmacist-sync' && (
        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <Users size={16} className="text-cyan-400" />
              การทำงานร่วมกับเภสัชกร (Interdisciplinary Collaboration)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              ในฐานะ Software Engineer การพัฒนาแอปพลิเคชันสาย HealthTech ไม่ใช่แค่การเขียนโค้ด แต่คือการเข้าใจ
              <strong> Domain Knowledge</strong> ของบุคลากรทางการแพทย์อย่างลึกซึ้ง:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                <div className="font-bold text-xs text-cyan-300">การสัมภาษณ์ความต้องการจริง</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  ทำ Workshop ร่วมกับเภสัชกรเพื่อค้นหา Pain point เวลาคนไข้โทรเข้ามาสอบถามเรื่องการลืมกินยา หรือเข้าใจผิดเรื่องขนาดยา
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                <div className="font-bold text-xs text-emerald-300">กระบวนการ Cross-Validation</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  สร้างระบบ Audit Trail บันทึกว่าเภสัชกรท่านใดเป็นผู้อนุมัติเอกสารฉบับล่าสุด ป้องกันข้อมูลคลาดเคลื่อน 100%
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                <div className="font-bold text-xs text-purple-300">User Testing กับผู้ป่วยจริง</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  ทดสอบการอ่านของผู้สูงอายุในคลินิก ปรับขนาดฟอนต์ สีเตือนอันตราย และปุ่มเปิดเสียงอ่านคำแนะนำ
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
