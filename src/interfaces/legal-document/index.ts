import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LegalDocumentInterface {
  id?: string;
  document_name: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface LegalDocumentGetQueryInterface extends GetQueryInterface {
  id?: string;
  document_name?: string;
  user_id?: string;
}
