import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type {Database} from '../../types/supabase'

const supabaseCompClient = createClientComponentClient<Database>();

export default supabaseCompClient;