/**
 * @author <a href="mailto:open@pattarapong.dev">Open Software Development Team - Pattarapong.Dev</a>
 * @license Pattarapong.Dev Open Software License Agreement (https://open.pattarapong.dev/licenses)
 * @copyright Pattarapong.Dev (https://pattarapong.dev)
 * @version alpha-0.1.0
 * @since 2024-07-16
 * @description This module provides various date and time manipulation functions.
 * @see https://docs.pattarapong.dev/th/date-time-manipulation-module
 * @link https://open.pattarapong.dev/
 * @link https://docs.pattarapong.dev/
 * @link https://github.com/Pattarapong-Dev
 */

export function addSeconds(date: Date, seconds: number) {
    return new Date(date.getTime() + seconds*1000);
}

export function addMinutes(date: Date, minutes: number): Date {
    return new Date(date.getTime() + minutes*60000);
}

export function addHours(date: Date, hours: number): Date {
    return new Date(date.getTime() + hours*3600000);
}

export function addDays(date: Date, days: number): Date {
    return new Date(date.getTime() + days*86400000);
}

export function addWeeks(date: Date, weeks: number): Date {
    return new Date(date.getTime() + weeks*604800000);
}

export default {
    currentTime: new Date,
    addSeconds,
    addMinutes,
    addHours,
    addDays,
    addWeeks,
    formatDate: (date: Date, format: string = 'YYYY-MM-DD HH:mm:ss') => {
        return date.toISOString().slice(0, format.length);
    }
}
