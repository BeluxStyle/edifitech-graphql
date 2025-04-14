import { useQuery, useMutation } from '@apollo/client';
import { COUNT_DATA } from '../graphql/queries/counts';
import { useState } from 'react';
import { CountData } from 'types';


export function useCounts() {

    const { data, loading, error, refetch } = useQuery(COUNT_DATA, {
        fetchPolicy: "cache-and-network"
    });

    const allCounts:CountData = {
        users: data?.countUsers,
        roles: data?.countRoles,
        subscriptions: data?.countSubscriptions,
        products: data?.countProductos,
        manuals: data?.countManuals,
        images: data?.countImages,
        edificios: data?.countEdificios,
        documents: data?.countDocuments,
        comunidades: data?.countComunidades,
        companies: data?.countCompanies,
        categories: data?.countCategories,
        brands: data?.countBrands,
        instalaciones: data?.countInstalaciones,
        contactos: data?.countContactos,
    }

    return {
        allCounts,
        loading,
        error,
        refetch,

    };
}