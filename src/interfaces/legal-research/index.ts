import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LegalResearchInterface {
  id?: string;
  research_topic: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface LegalResearchGetQueryInterface extends GetQueryInterface {
  id?: string;
  research_topic?: string;
  user_id?: string;
}
