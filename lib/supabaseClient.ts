import { createClient } from '@supabase/supabase-js'


/**
 * Safe to commit this key to public repo ( no auth / login related it's for public API )
 */
const anonKey:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjZmZxbWZkdXFqYmdhYm5hZHRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI4OTY3NDMsImV4cCI6MTk5ODQ3Mjc0M30.LxW6p3GXOJZwTSIKomx6K2jfl4yGC3NsCcd7aU4xV-A";

export const supabase = createClient('https://bcffqmfduqjbgabnadto.supabase.co', anonKey);