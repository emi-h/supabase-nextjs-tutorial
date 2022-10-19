import { createClient } from '@supabase/supabase-js'

// これらの変数はブラウザー上で公開されますが、[once you have the secrity enabled]
// データベースに行単位セキュリティーが設定されているので、全く問題ありません。
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)