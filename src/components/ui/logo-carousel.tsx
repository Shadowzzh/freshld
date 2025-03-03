"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import AliyunIcon from "~/assets/img/cooperation-logo/aliyun.svg";
import UnionpayIcon from "~/assets/img/cooperation-logo/unionpay.svg";
import QingcloudIcon from "~/assets/img/cooperation-logo/qingcloud.svg";
import FubonIcon from "~/assets/img/cooperation-logo/fubon.svg";
import DaocloudIcon from "~/assets/img/cooperation-logo/daocloud.svg";
import CzbIcon from "~/assets/img/cooperation-logo/czb.svg";
import AntGroupIcon from "~/assets/img/cooperation-logo/ant-group.svg";
import ZheshangImg from "~/assets/img/cooperation-logo/zheshang.png";
import YunnanImg from "~/assets/img/cooperation-logo/yunnan.png";
import XinxigongchengImg from "~/assets/img/cooperation-logo/xinxigongcheng.png";
import XinjiangweiwuerImg from "~/assets/img/cooperation-logo/xinjiangweiwuer.png";
import XianjincheungguoImg from "~/assets/img/cooperation-logo/xianjinchengguo.png";
import TongchuanImg from "~/assets/img/cooperation-logo/tongchuan.png";
import SportsImg from "~/assets/img/cooperation-logo/sports.png";
import ShuziyunguImg from "~/assets/img/cooperation-logo/shuziyungu.png";
import ShengjishengImg from "~/assets/img/cooperation-logo/shengjisheng.png";
import ShaoxingtongjiImg from "~/assets/img/cooperation-logo/shaoxingtongji.png";
import ShaoxingjiaotongImg from "~/assets/img/cooperation-logo/shaoxingjiaotong.png";
import ShaoxingBankImg from "~/assets/img/cooperation-logo/shaoxing-bank.png";
import NanjingligongImg from "~/assets/img/cooperation-logo/nanjingligong.png";
import LinquanBankImg from "~/assets/img/cooperation-logo/linquan-bank.png";
import LianruanImg from "~/assets/img/cooperation-logo/lianruan.png";
import JikeImg from "~/assets/img/cooperation-logo/jike.png";
import JiaxingnanhuImg from "~/assets/img/cooperation-logo/jiaxingnanhu.png";
import IraImg from "~/assets/img/cooperation-logo/ira.png";
import GuotouxinjiangImg from "~/assets/img/cooperation-logo/guotouxinjiang.png";
import HuaweiImg from "~/assets/img/cooperation-logo/huawei.png";
import GuangdongnengyuanImg from "~/assets/img/cooperation-logo/guangdongnengyuan.png";
import DongbeiImg from "~/assets/img/cooperation-logo/dongbei.png";
import DioImg from "~/assets/img/cooperation-logo/dio.png";
import ChuangweiImg from "~/assets/img/cooperation-logo/chuangwei.png";
import ChsImg from "~/assets/img/cooperation-logo/chs.jpg";
import ChinaMobileImg from "~/assets/img/cooperation-logo/china-mobile.png";
import ChegnduguidaoImg from "~/assets/img/cooperation-logo/chegnduguidao.png";
import AnhuijieshouImg from "~/assets/img/cooperation-logo/anhuijieshou.png";

interface Logo {
  id: number;
  name: string;
  img: React.ComponentType<React.SVGProps<SVGSVGElement>> | StaticImageData;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    if (shuffled[i] !== undefined && shuffled[j] !== undefined) {
      const temp = shuffled[i] as T;
      shuffled[i] = shuffled[j] as T;
      shuffled[j] = temp;
    }
  }
  return shuffled;
};

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos);
  const columns: Logo[][] = Array.from({ length: columnCount }, () => []);

  shuffled.forEach((logo, index) => {
    const columnIndex = index % columnCount;
    if (columns[columnIndex]) {
      columns[columnIndex].push(logo);
    }
  });

  const maxLength = Math.max(...columns.map((col) => col.length));
  columns.forEach((col) => {
    while (col.length < maxLength) {
      const randomIndex = Math.floor(Math.random() * shuffled.length);
      const randomLogo = shuffled[randomIndex];
      if (randomLogo) {
        col.push(randomLogo);
      }
    }
  });

  return columns;
};

interface LogoColumnProps {
  logos: Logo[];
  index: number;
  currentTime: number;
}

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 2000;
    const columnDelay = index * 200;
    const adjustedTime =
      (currentTime + columnDelay) % (cycleInterval * logos.length);
    const currentIndex = Math.floor(adjustedTime / cycleInterval);

    const CurrentLogo = useMemo(() => {
      const logo = logos[currentIndex];
      return logo ? logo.img : null;
    }, [logos, currentIndex]);

    return (
      <motion.div
        className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="wait">
          {CurrentLogo && (
            <motion.div
              key={`${logos[currentIndex]?.id ?? "placeholder"}-${currentIndex}`}
              className="absolute inset-0 flex items-center justify-center"
              // Animation for when the logo enters
              initial={{ y: "10%", opacity: 0 }}
              // Animation for when the logo is displayed
              animate={{
                y: "0%",
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  mass: 1,
                  bounce: 0.2,
                  duration: 0.5,
                },
              }}
              // Animation for when the logo exits
              exit={{
                y: "-20%",
                opacity: 0,
                transition: {
                  type: "tween",
                  ease: "easeIn",
                  duration: 0.3,
                },
              }}
              style={{
                filter: CurrentLogo ? "blur(0px)" : "blur(8px)",
              }}
            >
              {typeof CurrentLogo === "function" ? (
                <CurrentLogo className="h-20 max-h-[80%] w-20 max-w-[80%] object-contain md:h-32 md:w-32" />
              ) : (
                <Image
                  src={CurrentLogo}
                  alt={logos[currentIndex]?.name ?? "Logo"}
                  className="h-20 max-h-[80%] w-auto max-w-[80%] object-contain md:h-32 md:w-auto"
                  width={128}
                  height={128}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  },
);

// Add displayName to fix the missing display name error
LogoColumn.displayName = "LogoColumn";

// Main LogoCarousel component
function LogoCarousel({ columnCount = 2 }: { columnCount?: number }) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([]);
  const [currentTime, setCurrentTime] = useState(0);

  // Memoize the array of logos to prevent unnecessary re-renders
  const allLogos: Logo[] = useMemo(
    () => [
      { name: "阿里云", id: 1, img: AliyunIcon as StaticImageData },
      { name: "银联", id: 2, img: UnionpayIcon as StaticImageData },
      { name: "青云", id: 3, img: QingcloudIcon as StaticImageData },
      { name: "富邦", id: 4, img: FubonIcon as StaticImageData },
      { name: "道客", id: 5, img: DaocloudIcon as StaticImageData },
      { name: "浙商银行", id: 6, img: CzbIcon as StaticImageData },
      { name: "蚂蚁集团", id: 7, img: AntGroupIcon as StaticImageData },
      { name: "浙商", id: 8, img: ZheshangImg },
      { name: "云南", id: 9, img: YunnanImg },
      { name: "信息工程", id: 10, img: XinxigongchengImg },
      { name: "新疆", id: 11, img: XinjiangweiwuerImg },
      { name: "先进成果", id: 12, img: XianjincheungguoImg },
      { name: "铜川", id: 13, img: TongchuanImg },
      { name: "体育", id: 14, img: SportsImg },
      { name: "数字云谷", id: 15, img: ShuziyunguImg },
      { name: "省级声", id: 16, img: ShengjishengImg },
      { name: "绍兴统计", id: 17, img: ShaoxingtongjiImg },
      { name: "绍兴交通", id: 18, img: ShaoxingjiaotongImg },
      { name: "绍兴银行", id: 19, img: ShaoxingBankImg },
      { name: "南京理工", id: 20, img: NanjingligongImg },
      { name: "临泉银行", id: 21, img: LinquanBankImg },
      { name: "联软", id: 22, img: LianruanImg },
      { name: "即刻", id: 23, img: JikeImg },
      { name: "嘉兴南湖", id: 24, img: JiaxingnanhuImg },
      { name: "IRA", id: 25, img: IraImg },
      { name: "国投新疆", id: 26, img: GuotouxinjiangImg },
      { name: "华为", id: 27, img: HuaweiImg },
      { name: "广东能源", id: 28, img: GuangdongnengyuanImg },
      { name: "东北", id: 29, img: DongbeiImg },
      { name: "DIO", id: 30, img: DioImg },
      { name: "创维", id: 31, img: ChuangweiImg },
      { name: "CHS", id: 32, img: ChsImg },
      { name: "中国移动", id: 33, img: ChinaMobileImg },
      { name: "成都轨道", id: 34, img: ChegnduguidaoImg },
      { name: "安徽接收", id: 35, img: AnhuijieshouImg },
    ],
    [],
  );

  // Distribute logos across columns when the component mounts
  useEffect(() => {
    const distributedLogos = distributeLogos(allLogos, columnCount);
    setLogoSets(distributedLogos);
  }, [allLogos, columnCount]);

  // Function to update the current time (used for logo cycling)
  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100);
  }, []);

  // Set up an interval to update the time every 100ms
  useEffect(() => {
    const intervalId = setInterval(updateTime, 100);
    return () => clearInterval(intervalId);
  }, [updateTime]);

  // Render the logo columns
  return (
    <div className="flex space-x-4">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  );
}

export { LogoCarousel };
