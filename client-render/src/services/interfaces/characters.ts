interface Ipublisher {
  api_detail_url: string;
  id: number;
  name: string;
}

interface Iorigin {
  api_detail_url: string;
  id: number;
  name: string;
}

interface Iimage {
  icon_url: string;
  image_tags: string;
  medium_url: string;
  original_url: string;
  screen_large_url: string;
  screen_url: string;
  small_url: string;
  super_url: string;
  thumb_url: string;
  tiny_url: string;
}

interface Ifirst_appeared_in_issue {
  api_detail_url: string;
  id: number;
  issue_number: string;
  name: string;
}

export interface ICharacter {
  aliases: string;
  api_detail_url: string;
  birth: any; // verificar tipo na documentação
  count_of_issue_appearances: number;
  date_added: string;
  date_last_updated: string;
  deck: string;
  description: string;
  first_appeared_in_issue: Ifirst_appeared_in_issue;
  gender: number;
  id: number;
  image: Iimage;
  name: string;
  origin: Iorigin;
  publisher: Ipublisher;
  real_name: string;
  site_detail_url: string;
}

export interface IAllCharacters {
  error: string;
  limit: number;
  number_of_page_results: number;
  number_of_total_results: number;
  offset: number;
  results: ICharacter[];
  status_code: number;
  version: string;
}
