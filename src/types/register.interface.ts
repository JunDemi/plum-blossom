import type { CommonType } from "./common";

export interface IRegisterOne extends CommonType {
  /** 기준일 */
date?: string;
  /** 이름 */
character_name: string;
  /** 월드명 */
world_name: string;
  /** 캐릭터 성별 */
character_gender: string;
  /** 캐릭터 직업 */
character_class: string;
  /** 직업 전직 */
character_class_level: string;
  /** 레벨 */
character_level: number;
  /** 경험치 */
character_exp: number;
  /** 경험치 비율 */
character_exp_rate: string;
  /** 길드명 */
character_guild_name: string;
  /** 이미지 */
character_image: string;
  /** 캐릭터 생성일 */
character_date_create: string;
  /** ?? */
access_flag: string;
  /** ?? */
liberation_quest_clear_flag: string;
}
