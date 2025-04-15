import { useCompanyActions } from '../hooks/useCompanies';
import { toast } from '../utils/toast'; // función para mostrar toast
import { confirmDelete } from '../utils/confirmDelete'; // función para confirmar eliminación
import { CreateOptions, Company, CompanyInput } from '../types';

export const useCompanyHandlers = () => {
    const { deleteCompany, updateCompany, createCompany, removeUserFromCompany, addUserToCompany, addCommunityToCompany, removeCommunityFromCompany } = useCompanyActions();

    const handleDelete = async (id: string) => {
        const confirm = await confirmDelete("Estas seguro de eliminar ésta Empresa?"); // función reusable
        if (!confirm) return;

        try {
            await deleteCompany(id);
            toast('Empresa eliminada con éxito', 'warning');
        } catch (err) {
            toast('Error al eliminar empresa', 'error');
            console.error(err);
        }
    };

    const handleUpdate = async (company: Company) => {
        const input: CompanyInput = {
            name: company.name,
            phone: company.phone,
            address: company.address,
            cif: company.cif,
            type: company.type,
        }

        try {
            await updateCompany(company.id, input);
            toast('Empresa actualizada', 'success');
            return company; // Retorna el companyo actualizado
        } catch (err) {
            toast('Error al actualizar empresa', 'error');
            console.error(err);
        }
    };

    const handleCreate = async (newCompany: CompanyInput, { onSuccess, onError }: CreateOptions) => {
        try {
            const input: CompanyInput = newCompany

            const result = await createCompany(input);

            toast("Empresa creada correctamente", "success");
            onSuccess?.();
            return result.data.createCompany
        } catch (error: any) {
            console.error("Error al crear empresa:", error);
            toast("Error al crear empresa", "error");
            onError?.();
        }
    }

    const handleRemoveUser = async (userId: string, companyId: string) => {
        const confirm = await confirmDelete("Estas seguro de eliminar éste usuario de la Empresa?"); // función reusable
        if (!confirm) return;

        try {
            await removeUserFromCompany(userId, companyId);
            toast('Usuario eliminado de la Empresa con éxito', 'warning');
        } catch (err) {
            toast('Error al eliminar usuario de empresa', 'error');
            console.error(err);
        }
    };

    const handleAddUser = async (userId: string, companyId: string) => {

        try {
            await addUserToCompany(userId, companyId);
            toast('Usuario agregado a la Empresa con éxito', 'success');
        } catch (err) {
            toast('Error al agregar usuario a empresa', 'error');
            console.error(err);
        }
    };

    const handleRemoveCommunity = async (comunidadId: string, companyId: string) => {
        const confirm = await confirmDelete("Estas seguro de eliminar ésta comunidad de la Empresa?"); // función reusable
        if (!confirm) return;

        try {
            await removeCommunityFromCompany(comunidadId, companyId);
            toast('Comunidad eliminada de la Empresa con éxito', 'warning');
        } catch (err) {
            toast('Error al eliminar comunidad de empresa', 'error');
            console.error(err);
        }
    };

    const handleAddCommunity = async (comunidadId: string, companyId: string) => {

        try {
            await addCommunityToCompany(comunidadId, companyId);
            toast('Comunidad agregada a la Empresa con éxito', 'success');
        } catch (err) {
            toast('Error al agregar comunidad a empresa', 'error');
            console.error(err);
        }
    };



    return {
        handleDelete,
        handleUpdate,
        handleCreate,
        handleRemoveUser,
        handleAddUser,
        handleAddCommunity,
        handleRemoveCommunity
    };
};