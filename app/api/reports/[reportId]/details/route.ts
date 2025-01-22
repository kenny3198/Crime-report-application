import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
const prisma = new PrismaClient()
export async function GET(request: Request, {params}: {params: {reportId:string}})  {
try {
    const report = await prisma.report.findUnique({
        where: {
            reportId: params.reportId
        }     
    });
    if (!report ) {
        return NextResponse.json({error: "Report Not found"}, {status: 400})
    }
    return NextResponse.json(report)
} catch (error) {
   console.error("Error Fetching Report Details:", Error) 
   return NextResponse.json(
    {
    error: "Failed to fetch report details"
   },
   {
    status: 500
   }
)
}
}
