// Hoisting是指JS引擎在執行代碼之前，將function、variables或class的declaration移動到其範圍頂部。
// 只對function declaration有用
// JS只hoist declaration，而不是initialization，也就是說let x = 10;這段程式碼只有let x會被放到程式碼頂部。
// hoisting發生時，對於用var做declaration的variable會給初始值undefined，而用let或const做declaration的variable則不會。
