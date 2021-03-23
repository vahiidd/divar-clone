export type api = {}  | {
  suggestion_list: suggestion[];
  input_suggestion: any;
  subtitle: string;
  title: string;
  seo_details: any;
  internal_link_sections: unknown;
  widget_list: widget[];
  last_post_date: number;
  first_post_date: number;
  web_widgets: any;
  banners: any;
  schema: any;
  jli: any;
};
export interface widget {
  widget_type: string;
  data: widget_data;
}

export interface suggestion {
  displayed_text: string;
  value: suggestion_data;
}

export interface widget_data {
  title: string;
  image: string;
  web_image: { src: string; type: string }[];
  description: string;
  has_chat: boolean;
  red_text: string;
  normal_text: string;
  token: string;
  image_overlay_tag: unknown;
  image_top_left_tag: unknown;
  index: number;
  city: string;
  district: string;
  category: string;
}

export interface suggestion_data {
  category: { value: string };
}

export interface Submenu_data {
  id: number;
  title: string;
  info: { header: string; list: string[] }[];
  footer: string;
}
