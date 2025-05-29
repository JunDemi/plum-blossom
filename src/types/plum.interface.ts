/** 길드원 목록 */
export interface IPlumGuild {
  /** 기준일 */
  date?: string;
  /** 월드명 */
  world_name: string;
  /** 길드명 */
  guild_name: string;
  /** 길드레벨 */
  guild_level: number;
  /** 길드 ?? */
  guild_fame: number;
  /** 길드 포인트 */
  guild_point: number;
  /** 길드 마스터 */
  guild_master_name: string;
  /** 길드원 수 */
  guild_member_count: number;
  /** 길드원 목록 */
  guild_member: string[];
}
