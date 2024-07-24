
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function BookNow() {
  return (
    <Card className="max-w-md mx-auto ">
      <CardHeader>
        <CardTitle>Book Your Appointment</CardTitle>
        <CardDescription>Select a date and time to schedule your appointment.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            {/* <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex-col items-start w-full h-auto">
                  <span className="font-semibold uppercase text-[0.65rem]">Date</span>
                  <span className="font-normal">Select a date</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 max-w-[276px]">
                <Calendar />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex-col items-start w-full h-auto ">
                  <span className="font-semibold uppercase text-[0.65rem]">Time</span>
                  <span className="font-normal">Select a time</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 max-w-[276px]">
                <div className="grid grid-cols-3 gap-2 p-4">
                  <Button variant="ghost" size="sm">
                    9:00 AM
                  </Button>
                  <Button variant="ghost" size="sm">
                    10:00 AM
                  </Button>
                  <Button variant="ghost" size="sm">
                    11:00 AM
                  </Button>
                  <Button variant="ghost" size="sm">
                    1:00 PM
                  </Button>
                  <Button variant="ghost" size="sm">
                    2:00 PM
                  </Button>
                  <Button variant="ghost" size="sm">
                    3:00 PM
                  </Button>
                </div>
              </PopoverContent>
            </Popover> */}
          </div>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" type="address" placeholder="Enter your Address" />
          </div>
          <Button type="submit" className="w-full rounded-full bg-[#065D98] hover:bg-[#56BA40]">
            Book Appointment
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}