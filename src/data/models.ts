export type ResponseObject<T> = {
	error: ErrorDetails;
	data: T;
};

export type ErrorDetails =
	| false
	| {
			code: string;
			message: string;
	  };

export type Bank = {
	id: number;
	name: string;
	is_active: boolean;
	is_deleted: boolean;
	created_at?: string;
	edited_at?: string;
	created_by?: string;
	edited_by?: string;
};

export type Printer = {
	id: number;
	name: string;
	model: string;
	serial_no: string;
	description: string;
	is_active: boolean;
	is_deleted: boolean;
	created_at?: string;
	edited_at?: string;
	created_by?: string;
	edited_by?: string;
};

export type Shift = {
    shift_id: number,
    description: string,
    start_hour: number,
    end_hour: number,
    is_active: boolean,
    is_deleted: boolean,
    createdAt: Date,
    createdBy: string,
    editedAt: Date,
    editedBy: string
};