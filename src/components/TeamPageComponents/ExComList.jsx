import React from "react";
import ExComCard from "./ExComCard";
import { motion } from "framer-motion";

// Importing images with standardized path
import SunnyShabanAli from '../../assets/images/team/Web-Development-(Frontend)-Head-Sunny-Shaban-Ali.jpg';
import AliNazir from '../../assets/images/team/Web-Development-(Frontend)-Co-Head-Ali-Nazir.jpg';
import MuhammadOwais from '../../assets/images/team/Web-Development-(Frontend)-Co-Head-Muhammad-Owais.jpg';
import SameerAhmed from '../../assets/images/team/Web-Development-(Backend)-Head-Sameer-Ahmed.jpg';
import SahilLatif from '../../assets/images/team/Web-Development-(Backend)-Cohead-Sahil-Latif.jpg';
import ShahmeerIrfan from '../../assets/images/team/Web-Development-(Backend)-Cohead-Shahmeer-Irfan.jpg';

import SaadBinJunaid from '../../assets/images/team/Marketing-Co-Head-Saad-Bin-Junaid.jpg';
import HaneeshAli from '../../assets/images/team/Marketing-Co-Head-Haneesh-Ali.jpg';

import NehaAamir from '../../assets/images/team/Guest-Relations-Head-Neha-Aamir.jpg';
import FabihaAyela from '../../assets/images/team/Guest-Relations-Co-Head-Fabiha-Ayela.jpg';
import RameelaHassan from '../../assets/images/team/Guest-Relations-Co-Head-Rameela-Hassan.jpg';
import DaniyalHussain from '../../assets/images/team/Guest-Relations-Co-Head-Daniyal-Hussain.jpg';

import IjlalIqbal from '../../assets/images/team/Public-Relations-Head-Ijlal-Iqbal.jpg';
import MuhammadShaheer from '../../assets/images/team/Public-Relations-Co-Head-Muhammad-Shaheer.jpg';
import SohaibRafay from '../../assets/images/team/Public-Relations-Co-Head-Sohaib-Rafay.jpg';
import ShoaibRaza from '../../assets/images/team/Public-Relations-Co-Head-Shoaib-Raza.jpg';
import TahaAlam from '../../assets/images/team/Public-Relations-Co-Head-Taha-Alam.jpg';

import AbubakarBinDanish from '../../assets/images/team/Co-operate-Affairs-Director-Abubakar-Bin-Danish.jpg';
import RahimIrfan from '../../assets/images/team/Co-operate-Affairs-Manager-Rahim-Irfan.jpg';

import MurtazaHussain from '../../assets/images/team/Security-Head-Murtaza-Hussain.jpg';
import MuhammadSaudImran from '../../assets/images/team/Security-Co-head-Muhammad-Saud-Imran.jpg';
import MuhammadHasnain from '../../assets/images/team/Security-Co-head-Muhammad-Hasnain.jpg';

import AhadAzizJaffer from '../../assets/images/team/Technology-Co-Lead-Ahad-Aziz-Jaffer.jpg';
import SyedaSamahaBatoolRizvi from '../../assets/images/team/Technology-Co-Lead-Syeda-Samaha-Batool-Rizvi.jpg';

import SameerRajani from '../../assets/images/team/Animations-Head-Sameer-Rajani.jpg';
import AfaqAhmedSoomro from '../../assets/images/team/Animations-Co-head-Afaq-Ahmed-Soomro.jpg';

import WajheehAliKhan from '../../assets/images/team/SOP-Compliance-Head-Wajheeh-Ali-Khan.jpg';
import AteebAzam from '../../assets/images/team/SOP-Compliance-Co-Head-Ateeb-Azam.jpg';
import RahimaIrfan from '../../assets/images/team/SOP-Compliance-Co-Head-Rahima-Irfan.jpg';

import MuhammadAsfar from '../../assets/images/team/Promotions-Co-Head-Muhammad-Asfar.jpg';
import MuhammadBilalAsif from '../../assets/images/team/Promotions-Co-Head-Muhammad-Bilal-Asif.jpg';
import SyedMuhammadShazanRizvi from '../../assets/images/team/Promotions-Co-Head-Syed-Muhammad-Shazan-Rizvi.jpg';

import AbdulRafayKalim from '../../assets/images/team/Event-Management-Head-Abdul-Rafay-Kalim.jpg';
import MariumShahid from '../../assets/images/team/Event-Management-Cohead-Marium-Shahid.jpg';
import MuhammadHuzaifa from '../../assets/images/team/Event-Management-Cohead-Muhammad-Huzaifa.jpg';
import AbdullahBinMasood from '../../assets/images/team/Event-Management-Cohead-Abdullah-Bin-Masood.jpg';
import DaniyalAli from '../../assets/images/team/Event-Management-Cohead-Daniyal-Ali.jpg';

import WarishaSiddiqui from '../../assets/images/team/Design-Head-Warisha-Siddiqui.jpg';
import AfafShahid from '../../assets/images/team/Design-Co-Head-Afaf-Shahid.jpg';
import TaqwaRasheed from '../../assets/images/team/Design-Co-Head-Taqwa-Rasheed.jpg';
import SyedTahaZaidi from '../../assets/images/team/Design-Executive-Head-Syed-Taha-Zaidi.jpg';

import FarheenFatima from '../../assets/images/team/Content-Head-Farheen-Fatima.jpg';
import MuhammadAhzamWaheed from '../../assets/images/team/Content-Co-Head-Muhammad-Ahzam-Waheed.jpg';
import KousarSaeed from '../../assets/images/team/Content-Co-Head-Kousar-Saeed.jpg';

import WaniaFatima from '../../assets/images/team/Media-Manager-Wania-Fatima.jpg';
import AimenQureshi from '../../assets/images/team/Media-Co-Head-Aimen-Qureshi.jpg';
import EeshaNaveed from '../../assets/images/team/Media-Co-Head-Eesha-Naveed.jpg';
import QurratulainFatima from '../../assets/images/team/Media-Assistant-Co-Head-Qurratulain-Fatima.jpg';
import MujtabaKamran from '../../assets/images/team/Media-Assistant-Co-Head-Mujtaba-Kamran.jpg';

import MunnazzarShahzad from '../../assets/images/team/Automation-Head-Munnazzar-Shahzad.jpg';
import AsfandyarKhanzada from '../../assets/images/team/Automation-Co-Head-Asfandyar-Khanzada.jpg';
import UmarAurangzeb from '../../assets/images/team/Automation-Co-Head-Umar-Aurangzeb.jpg';

import MuhammadAmmar from '../../assets/images/team/Training-And-Mentorship-Head-Muhammad-Ammar.jpg';
import MuhammadAnasKhan from '../../assets/images/team/Training-And-Mentorship-Co-Head-Muhammad-Anas-khan.jpg';
import SyedAbdullahBinTariq from '../../assets/images/team/Training-And-Mentorship-Co-Head-Syed-Abdullah-Bin-Tariq.jpg';

import MuhammadTalha from '../../assets/images/team/Creativity-Head-Muhammad-Talha.jpg';
import SyedaEizzaSakina from '../../assets/images/team/Creativity-Co-Head-Syeda-Eizza-Sakina.jpg';

import ShaheerUlIslam from '../../assets/images/team/Virtual-Resource-Head-Shaheer-Ul-Islam.jpg';
import MuhammadUzair from '../../assets/images/team/Virtual-Resource-Co-Head-Muhammad-Uzair.jpg';

const ExComList = () => {
  const teamsData = [
    {
      teamName: "Co-operate Affairs Team",
      members: [
        { imgUrl: AbubakarBinDanish, title: "Director of Co-operate Affairs", name: "Abubakar Bin Danish" },
        { imgUrl: RahimIrfan, title: "Manager of Co-Operate Affairs", name: "Rahim Irfan" },
      ],
    },
    {
      teamName: "Technology Team",
      members: [
        { imgUrl: AhadAzizJaffer, title: "Co-Lead of Technology", name: "Ahad Aziz Jaffer" },
        { imgUrl: SyedaSamahaBatoolRizvi, title: "Co-Lead of Technology", name: "Syeda Samaha Batool Rizvi" },
      ],
    },
    {
      teamName: "Web Development Team",
      members: [
        { imgUrl: SunnyShabanAli, title: "Head of Frontend", name: "Sunny Shaban Ali" },
        { imgUrl: MuhammadOwais, title: "Co-Head of Frontend", name: "Muhammad Owais" },
        { imgUrl: AliNazir, title: "Co-Head of Frontend", name: "Ali Nazir" },
        { imgUrl: SameerAhmed, title: "Head of Backend", name: "Sameer Ahmed" },
        { imgUrl: SahilLatif, title: "Co-Head of Backend", name: "Sahil Latif" },
        { imgUrl: ShahmeerIrfan, title: "Co-Head of Backend", name: "Shahmeer Irfan" },
      ],
    },
    {
      teamName: "Event Management Team",
      members: [
        { imgUrl: AbdulRafayKalim, title: "Head of Event Management", name: "Abdul Rafay Kalim" },
        { imgUrl: MariumShahid, title: "Co-Head of Event Management", name: "Marium Shahid" },
        { imgUrl: MuhammadHuzaifa, title: "Co-Head of Event Management", name: "Muhammad Huzaifa" },
        { imgUrl: AbdullahBinMasood, title: "Co-Head of Event Management", name: "Abdullah Bin Masood" },
        { imgUrl: DaniyalAli, title: "Co-Head of Event Management", name: "Daniyal Ali" },
      ],
    },
    
    {
      teamName: "Public Relations Team",
      members: [
        { imgUrl: IjlalIqbal, title: "Head of Public Relations", name: "Ijlal Iqbal" },
        { imgUrl: MuhammadShaheer, title: "Co-Head of Public Relations", name: "Muhammad Shaheer" },
        { imgUrl: SohaibRafay, title: "Co-Head of Public Relations", name: "Muhammad Sohaib" },
        { imgUrl: ShoaibRaza, title: "Co-Head of Public Relations", name: "Shoaib Raza" },
        { imgUrl: TahaAlam, title: "Co-Head of Public Relations", name: "Taha Alam" },
      ],
    },
    {
      teamName: "Marketing Team",
      members: [
        { imgUrl: SaadBinJunaid, title: "Co-Head of Marketing", name: "Saad Bin Junaid" },
        { imgUrl: HaneeshAli, title: "Co-Head of Marketing", name: "Haneesh Ali" },
      ],
    },
    {
      teamName: "Guest Relations Team",
      members: [
        { imgUrl: NehaAamir, title: "Head of Guest Relations", name: "Neha Aamir" },
        { imgUrl: FabihaAyela, title: "Co-Head of Guest Relations", name: "Fabiha Ayela" },
        { imgUrl: RameelaHassan, title: "Co-Head of Guest Relations", name: "Rameela Hassan" },
        { imgUrl: DaniyalHussain, title: "Co-Head of Guest Relations", name: "Daniyal Hussain" },
      ],
    },
    {
      teamName: "Security Team",
      members: [
        { imgUrl: MurtazaHussain, title: "Head of Security", name: "Murtaza Hussain" },
        { imgUrl: MuhammadSaudImran, title: "Co-Head of Security", name: "Muhammad Saud Imran" },
        { imgUrl: MuhammadHasnain, title: "Co-Head of Security", name: "Muhammad Hasnain" },
      ],
    },
    {
      teamName: "Animations Team",
      members: [
        { imgUrl: SameerRajani, title: "Head of Animations", name: "Sameer Rajani" },
        { imgUrl: AfaqAhmedSoomro, title: "Co-Head of Animations", name: "Afaq Ahmed Soomro" },
      ],
    },
    {
      teamName: "SOP Compliance Team",
      members: [
        { imgUrl: WajheehAliKhan, title: "Head of SOP Compliance", name: "Wajheeh Ali Khan" },
        { imgUrl: AteebAzam, title: "Co-Head of SOP Compliance", name: "Ateeb Azam" },
        { imgUrl: RahimaIrfan, title: "Co-Head of SOP Compliance", name: "Rahima Irfan" },
      ],
    },
    {
      teamName: "Promotions Team",
      members: [
        { imgUrl: MuhammadAsfar, title: "Co-Head of Promotions", name: "Muhammad Asfar" },
        { imgUrl: MuhammadBilalAsif, title: "Co-Head of Promotions", name: "Muhammad Bilal Asif" },
        { imgUrl: SyedMuhammadShazanRizvi, title: "Co-Head of Promotions", name: "Syed Muhammad Shazan Rizvi" },
      ],
    },
    
    {
      teamName: "Design Team",
      members: [
        { imgUrl: WarishaSiddiqui, title: "Head of Design", name: "Warisha Siddiqui" },
        { imgUrl: AfafShahid, title: "Co-Head of Design", name: "Afaf Shahid" },
        { imgUrl: TaqwaRasheed, title: "Co-Head of Design", name: "Taqwa Rasheed" },
        { imgUrl: SyedTahaZaidi, title: "Executive Head of Design", name: "Syed Taha Zaidi" },
      ],
    },
    {
      teamName: "Content Team",
      members: [
        { imgUrl: FarheenFatima, title: "Head of Content", name: "Farheen Fatima" },
        { imgUrl: MuhammadAhzamWaheed, title: "Co-Head of Content", name: "Muhammad Ahzam Waheed" },
        { imgUrl: KousarSaeed, title: "Co-Head of Content", name: "Kousar Saeed" },
      ],
    },
    {
      teamName: "Media Team",
      members: [
        { imgUrl: WaniaFatima, title: "Media Manager", name: "Wania Fatima" },
        { imgUrl: AimenQureshi, title: "Co-Head of Media", name: "Aimen Qureshi" },
        { imgUrl: EeshaNaveed, title: "Co-Head of Media", name: "Eesha Naveed" },
        { imgUrl: QurratulainFatima, title: "Assistant Co-Head of Media", name: "Qurratulain Fatima" },
        { imgUrl: MujtabaKamran, title: "Assistant Co-Head of Media", name: "Mujtaba Kamran" },
      ],
    },
    {
      teamName: "Automation Team",
      members: [
        { imgUrl: MunnazzarShahzad, title: "Head of Automation", name: "Munnazzar Shahzad" },
        { imgUrl: AsfandyarKhanzada, title: "Co-Head of Automation", name: "Asfandyar Khanzada" },
        { imgUrl: UmarAurangzeb, title: "Co-Head of Automation", name: "Umar Aurangzeb" },
      ],
    },
    {
      teamName: "Training and Mentorship Team",
      members: [
        { imgUrl: MuhammadAmmar, title: "Head of Training and Mentorship", name: "Muhammad Ammar" },
        { imgUrl: MuhammadAnasKhan, title: "Co-Head of Training and Mentorship", name: "Muhammad Anas Khan" },
        { imgUrl: SyedAbdullahBinTariq, title: "Co-Head of Training and Mentorship", name: "Syed Abdullah Bin Tariq" },
      ],
    },
    {
      teamName: "Creativity Team",
      members: [
        { imgUrl: MuhammadTalha, title: "Head of Creativity", name: "Muhammad Talha" },
        { imgUrl: SyedaEizzaSakina, title: "Co-Head of Creativity", name: "Syeda Eizza Sakina" },
      ],
    },
    {
      teamName: "Virtual Resource Team",
      members: [
        { imgUrl: ShaheerUlIslam, title: "Head of Virtual Resource", name: "Shaheer Ul Islam" },
        { imgUrl: MuhammadUzair, title: "Co-Head of Virtual Resource", name: "Muhammad Uzair" },
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center sm:pl-10 overflow-hidden">
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl text-[#006984] font-extrabold mb-2 md:mb-16 text-center"
        initial="hidden"
        animate="visible"
      >
        Extended Committee
      </motion.h2>
      {teamsData.map((team, index) => (
        <div key={index} className="w-full text-center mb-12">
          <motion.h3
            className="text-2xl md:text-3xl lg:text-4xl text-[#005670] font-bold mb-12"
            initial="hidden"
            animate="visible"
          >
            {team.teamName}
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-12 p-4">
            {team.members.map((member, idx) => (
              <ExComCard
                key={idx}
                imgUrl={member.imgUrl}
                title={member.title}
                name={member.name}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExComList;