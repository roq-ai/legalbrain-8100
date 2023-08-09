import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LegalInsightInterface {
  id?: string;
  insight_name: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface LegalInsightGetQueryInterface extends GetQueryInterface {
  id?: string;
  insight_name?: string;
  user_id?: string;
}
