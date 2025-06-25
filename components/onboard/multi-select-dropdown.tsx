"use client"

import { useState } from "react"
import { Check, ChevronDown, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"

const options = [
  { id: "react", label: "React" },
  { id: "vue", label: "Vue.js" },
  { id: "angular", label: "Angular" },
  { id: "svelte", label: "Svelte" },
  { id: "nextjs", label: "Next.js" },
  { id: "nuxt", label: "Nuxt.js" },
  { id: "gatsby", label: "Gatsby" },
  { id: "remix", label: "Remix" },
]

export default function MultiSelectDropDown() {
  const [open, setOpen] = useState(false)
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const handleSelect = (optionId: string) => {
    setSelectedItems((prev) => (prev.includes(optionId) ? prev.filter((id) => id !== optionId) : [...prev, optionId]))
  }

  const handleRemove = (optionId: string) => {
    setSelectedItems((prev) => prev.filter((id) => id !== optionId))
  }

  const selectedLabels = selectedItems.map((id) => options.find((option) => option.id === id)?.label).filter(Boolean)

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Select Frameworks</label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between min-h-10 h-auto py-2"
            >
              <div className="flex flex-wrap gap-1 flex-1">
                {selectedItems.length === 0 ? (
                  <span className="text-muted-foreground">Select frameworks...</span>
                ) : (
                  selectedLabels.map((label, index) => (
                    <Badge key={selectedItems[index]} variant="secondary" className="text-xs">
                      {label}
                      <button
                        className="ml-1 hover:bg-muted rounded-full"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          handleRemove(selectedItems[index])
                        }}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))
                )}
              </div>
              <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0" align="start">
            <div className="max-h-60 overflow-auto">
              {options.map((option) => (
                <div
                  key={option.id}
                  className="flex items-center space-x-2 px-4 py-2 hover:bg-muted cursor-pointer"
                  onClick={() => handleSelect(option.id)}
                >
                  <Checkbox
                    id={option.id}
                    checked={selectedItems.includes(option.id)}
                    onChange={() => handleSelect(option.id)}
                  />
                  <label
                    htmlFor={option.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1"
                  >
                    {option.label}
                  </label>
                  {selectedItems.includes(option.id) && <Check className="h-4 w-4 text-primary" />}
                </div>
              ))}
            </div>
            {selectedItems.length > 0 && (
              <div className="border-t p-2">
                <Button variant="ghost" size="sm" className="w-full text-xs" onClick={() => setSelectedItems([])}>
                  Clear all ({selectedItems.length})
                </Button>
              </div>
            )}
          </PopoverContent>
        </Popover>
      </div>

      {selectedItems.length > 0 && (
        <div className="mt-4 p-3 bg-muted rounded-md">
          <p className="text-sm font-medium mb-2">Selected ({selectedItems.length}):</p>
          <div className="flex flex-wrap gap-1">
            {selectedLabels.map((label, index) => (
              <Badge key={selectedItems[index]} variant="default" className="text-xs">
                {label}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
