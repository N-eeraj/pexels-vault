import {
  useSearchParams,
  useRouter,
  usePathname,
} from "next/navigation"

export default function useUpdateSearchParams() {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const router = useRouter()

  const updateSearchParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    searchParams.entries()
      .forEach(([queryKey, queryValue]: [string, string]) => 
        params.set(queryKey, queryKey === key ? value : queryValue)
      )
    if (!params.has(key)) {
      params.set(key, value)
    }
    router.push(`${pathName}?${params.toString()}`)
  }

  return {
    updateSearchParams
  }
}